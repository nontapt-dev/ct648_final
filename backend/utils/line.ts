export async function SendToLine(message: string) {
    const token = 'MeHN6VNE4a3m4CnB2IPJAvly7hNvlMdCCVi9pyzDaGh';
    //const token = 'C9vv0ynvs2J66fHIZuiUn15Bdm3mbUhXKhdHbHpUeUE'; // ทดสอบ
 
    const paras = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`
        },
        body: new URLSearchParams({
        'message': message
        })
    };

    const response = await fetch('https://notify-api.line.me/api/notify', paras);

    if (!response.ok) {
        console.error('Error sending message to LINE:', response.statusText);
    } else {
        console.log('Message sent to LINE successfully.');
    }
}
