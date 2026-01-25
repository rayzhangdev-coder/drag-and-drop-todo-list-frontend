const todoArr = [
    { id: '1', label: 'Finish MERN Stack Security', completed: false },
    { id: '2', label: 'Research Tesla Frequency Theories', completed: false },
    { id: '3', label: 'Update LeaderLink Database', completed: false },
    { id: '4', label: 'Set up ESP32 for Dorm Lights', completed: false },
    { id: '5', label: 'Review Linear Algebra for Machine Learning', completed: false },
    { id: '6', label: 'Check API Latency for Satellite Tracker', completed: false },
    { id: '7', label: 'Refactor n8n Weather Automation', completed: false },
    { id: '8', label: 'Study Bruce Lee Philosophy', completed: false },
    { id: '9', label: 'The morning sky turned pink just before the sun rose.', completed: false },
    { id: '10', label: 'I forgot my headphones and had to enjoy the silence instead.', completed: false },
    { id: '11', label: 'The cat stared at the empty bowl like it personally offended her.', completed: false },
    { id: '12', label: 'He practiced every day until the song finally sounded smooth.', completed: false },
    { id: '13', label: 'A light breeze carried the smell of rain through the park.', completed: false },
    { id: '14', label: 'She opened the book and disappeared into another world.', completed: false },
    { id: '15', label: 'My coffee went cold while I answered one email.', completed: false },
    { id: '16', label: 'The robot rolled forward, blinking curiously.', completed: false },
    { id: '17', label: 'We laughed so hard that our cheeks started to hurt.', completed: false },
    { id: '18', label: 'The ocean waves moved in steady, hypnotic rhythms.', completed: false },
    { id: '19', label: 'He triple-checked the lock before leaving the house.', completed: false },
    { id: '20', label: 'The teacher paused, waiting for someone to volunteer.', completed: false },
    { id: '21', label: 'I planted a seed and hoped it would surprise me.', completed: false },
    { id: '22', label: 'Thunder rumbled in the distance like a warning.', completed: false },
    { id: '23', label: 'She solved the puzzle faster than anyone expected.', completed: false },
    { id: '24', label: 'The bus was late, but nobody seemed surprised.', completed: false },
    { id: '25', label: 'A tiny dog barked bravely at a passing truck.', completed: false },
    { id: '26', label: 'We took the long route just to enjoy the view.', completed: false },
    { id: '27', label: 'He saved the file and finally took a deep breath.', completed: false },
    { id: '28', label: 'The museum was quiet except for soft footsteps.', completed: false },
    { id: '29', label: 'She tied her shoes and sprinted toward the finish line.', completed: false },
    { id: '30', label: 'The moon hung low, bright and calm.', completed: false },
    { id: '31', label: 'He couldn’t decide between pizza or noodles for dinner.', completed: false },
    { id: '32', label: 'The keyboard clicked steadily as ideas turned into words.', completed: false },
    { id: '33', label: 'They whispered secrets under the stars.', completed: false },
    { id: '34', label: 'The wind chimes sang when the storm rolled in.', completed: false },
    { id: '35', label: 'She learned from every mistake and kept going.', completed: false },
    { id: '36', label: 'The bakery smelled like sugar and warm bread.', completed: false },
    { id: '37', label: 'He smiled when the plan finally worked.', completed: false },
    { id: '38', label: 'The day ended slower than it began.', completed: false }
  ];

// const fillUp = async () => {
//     for(let i = 20; i>=0; i--){
//         try{
//             const res = await fetch('http://localhost:3001/todos',{
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NGIyNmJmYWFhNTI0OTJiODgxNmJjYiIsInVzZXJuYW1lIjoiYm9idGhlYnVpbGRlciIsImlhdCI6MTc2ODU0NDIzNSwiZXhwIjoxNzY4NjMwNjM1fQ.HVkACWuLvefx8yCTrG_K6As8rJO7ZIeaKUm3hifbVTc'
//                 },
//                 body: JSON.stringify({task: `${i}`})
//             });
//             if(!res.ok){
//                 console.log(`Failed to add task '${i}'. Status: ${res.status} ${res.statusText}`);
//             }else{
//                 console.log(`Succcesfully added task '${i}'. Status: ${res.status} ${res.statusText}`);
//             }
//         }catch(err){
//             console.log('Network Error: ', err.message);
//         }
//     }
//     console.log("Finished seeding todos!");
// }
// fillUp();

const deleteAll = async () => {
    try{ 
        const res = await fetch('http://localhost:3001/todos', {
            headers: {
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NGIyNmJmYWFhNTI0OTJiODgxNmJjYiIsInVzZXJuYW1lIjoiYm9idGhlYnVpbGRlciIsImlhdCI6MTc2ODU0NDIzNSwiZXhwIjoxNzY4NjMwNjM1fQ.HVkACWuLvefx8yCTrG_K6As8rJO7ZIeaKUm3hifbVTc'
            }
        });
        const allTodos = await res.json();
        if(!res.ok){
            throw new Error(`Failed to fetch. Status: ${res.status}`);
        }
        const allIds = allTodos.map(t => t.id);
        for(let i = 0; i<allIds.length; i++){
            const res = await fetch(`http://localhost:3001/todos/${allIds[i]}`, {
                method: 'DELETE',
                headers: {
                    'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NGIyNmJmYWFhNTI0OTJiODgxNmJjYiIsInVzZXJuYW1lIjoiYm9idGhlYnVpbGRlciIsImlhdCI6MTc2ODU0NDIzNSwiZXhwIjoxNzY4NjMwNjM1fQ.HVkACWuLvefx8yCTrG_K6As8rJO7ZIeaKUm3hifbVTc'
                }
            });
            if(!res.ok){
                throw new Error(`Failed to delete: res.status`);
            }else{
                console.log('Successfully deleted task with id: ', allIds[i]);
            }
        }
        console.log('Finished deleting everything');
    }catch(err){
        console.log(err.message);
    }
}
deleteAll();