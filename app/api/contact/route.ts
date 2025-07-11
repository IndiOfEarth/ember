import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const body = await request.json()

    const { name, email, message } = body

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400})
    }

    // Here can be integrated:
    // send an email via SendGrid, Resend, Nodemail, etc.
    // store in database

    console.log('New contact form submission:', { name, email, message })

    return NextResponse.json({ message: 'Message received' }, { status: 200 })
}