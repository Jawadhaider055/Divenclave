import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const consultancy = await prisma.freeConsultancy.findUnique({
      where: { id: parseInt(id) },
    });

    if (consultancy) {
      return new Response(JSON.stringify(consultancy), { status: 200 });
    } else {
      return new Response(JSON.stringify({ message: 'Consultancy not found' }), { status: 404 });
    }
  } catch (error) {
    console.error('Error retrieving consultancy:', error);
    return new Response(JSON.stringify({ error: 'Unable to retrieve consultancy' }), {
      status: 500,
    });
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    await prisma.freeConsultancy.delete({
      where: { id: parseInt(id) },
    });

    return new Response(JSON.stringify({ message: 'Consultancy deleted successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error deleting consultancy:', error);
    return new Response(JSON.stringify({ error: 'Unable to delete consultancy' }), {
      status: 500,
    });
  }
}

export async function PUT(req, { params }) {
  const { id } = params;
  const { firstName, email, phone, website, consultancy, message } = await req.json();

  try {
    const updatedConsultancy = await prisma.freeConsultancy.update({
      where: { id: parseInt(id) },
      data: { firstName, email, phone, website, consultancy, message },
    });

    return new Response(JSON.stringify({ message: 'Consultancy updated successfully', updatedConsultancy }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error updating consultancy:', error);
    return new Response(JSON.stringify({ error: 'Unable to update consultancy' }), {
      status: 500,
    });
  }
}
