import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST = async ({ params, request }) => {
  const body = await request.json();
  const { from, subject, html } = body;
  const send = await resend.emails.send({
    from: from,
    to: "carlosvillalobos247@gmail.com",
    subject: subject,
    html: html,
  });

  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data,
      }),
      {
        status: 200,
        statusText: "OK",
      }
    );
  }

  if (send.error) {
    return new Response(
      JSON.stringify({
        message: send.error,
      }),
      {
        status: 500,
        statusText: "Internal Server Error",
      }
    );
  }

  return new Response(
    JSON.stringify({
      name: "Astro",
      url: "https://astro.build/",
    })
  );
};
