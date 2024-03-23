// import { Resend } from "resend";
import nodemailer from "nodemailer";

// const resend = new Resend(import.meta.env.RESEND_API_KEY);
const googlePassword = import.meta.env.GOOGLE_PASSWORD;
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "carlosvillalobos247@gmail.com",
    pass: googlePassword,
  },
});
export const POST = async ({ params, request }) => {
  const body = await request.json();
  const { from, subject, html } = body;
  try {
    await transporter.verify();

    // const send = await resend.emails.send({
    //   from: "jmonge@jpc.fi.cr",
    //   to: "carlosvillalobos247@gmail.com",
    //   subject: subject,
    //   html: html,
    // });

    const res = await transporter.sendMail({
      from: from,
      to: "carlosvillalobos247@gmail.com",
      subject: `${subject} ${from}`,
      html: `<p>${html}</p>`,
      text: html,
    });

    // console.log(res);

    // if (send.data) {
    //   return new Response(
    //     JSON.stringify({
    //       message: send.data,
    //     }),
    //     {
    //       status: 200,
    //       statusText: "OK",
    //     }
    //   );
    // }

    // if (send.error) {
    //   console.log(send.error);
    //   return new Response(
    //     JSON.stringify({
    //       message: send.error,
    //     }),
    //     {
    //       status: 500,
    //       statusText: "Internal Server Error",
    //     }
    //   );
    // }

    return new Response(
      JSON.stringify({
        name: "Astro",
        url: "https://astro.build/",
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        name: "Astro",
        url: "https://astro.build/",
      })
    );
  }
};
