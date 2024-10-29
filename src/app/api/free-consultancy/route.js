import prisma from '../../lib/prisma';

export async function POST(req, res) {
  const { firstName, email, phone, website, consultancy, message } = await req.json();

  try {
    const newConsultancy = await prisma.freeConsultancy.create({
      data: {
        firstName,
        email,
        phone,
        website,
        consultancy,
        message,
      },
    });

    return new Response(JSON.stringify({ message: 'Consultancy submitted successfully', newConsultancy }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error creating consultancy:', error);
    return new Response(JSON.stringify({ error: 'Unable to submit consultancy' }), {
      status: 500,
    });
  }
}
