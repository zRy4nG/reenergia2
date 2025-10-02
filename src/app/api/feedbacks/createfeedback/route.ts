import { NextResponse } from 'next/server'

const feedbacks = [
  { id: 1, user: 'João', comment: 'Ótimo serviço!', rating: 5 },
  { id: 2, user: 'Maria', comment: 'Poderia ser melhor.', rating: 3 },
  { id: 3, user: 'Carlos', comment: 'Excelente atendimento.', rating: 4 },
]

export async function GET() {
  return NextResponse.json({ feedbacks })
}
