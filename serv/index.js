const jsonServer = require('json-server');

const db = {
  "users": [
    {
      "name": "Софья Макарова",
      "img": "https://s3-alpha-sig.figma.com/img/7b73/f12b/bf794ec54dbd150ef3e77c63763d7d69?Expires=1693180800&Signature=I2ZvA-hvaKtctCwIPZqvrKNybyW8VbLtCkzxx-FVuhKnbGqhUPE8qO-34q8fw9Zqk6QzSO5fTk60-s2trhrwgC9T1PdCa31IOTgS2dRmEoPItUem~0HIurFp5GyZyzi6jyxhI2XJLjtnLqfe5g6Ndt2jn5oFRPwf1JQcYuEuRqDtV8GYi3qyNPPi7FRM9MRmbD1IJV6kjtzH3RuilUzU1578kpOdZeXj-laHVv-jaSfBjdIR0-wEgo~CosO6yNVsBj48bhU~LSi4DhVg8lzD-1b6bK2yk8zZzgvFphaxsvZxhEsQ-4l7etfgjXHwr3xrC~8ymjn1iPAxoNCwrnZpYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "id": 1,
      "status": "<svg xmlns='http://www.w3.org/2000/svg' width='27' height='26' viewBox='0 0 27 26' fill='none'><rect x='1.25' y='1' width='24' height='24' rx='12' fill='#1CB355' stroke='white' stroke-width='2'/><path d='M18.4024 7.84063C17.1183 6.56094 15.4061 5.85001 13.5988 5.85001C9.84146 5.85001 6.79756 8.88334 6.79756 12.6276C6.79756 13.8125 7.13049 14.9974 7.70122 15.9927L6.75 19.5L10.3646 18.5521C11.3634 19.0734 12.4573 19.3578 13.5988 19.3578C17.3561 19.3578 20.4 16.3245 20.4 12.5802C20.3524 10.8266 19.6866 9.12032 18.4024 7.84063ZM16.8805 15.0448C16.7378 15.424 16.0719 15.8031 15.739 15.8505C15.4537 15.8979 15.0732 15.8979 14.6927 15.8031C14.4549 15.7083 14.122 15.6135 13.7415 15.424C12.0293 14.713 10.9354 13.0068 10.8402 12.8646C10.7451 12.7698 10.1268 11.9641 10.1268 11.1109C10.1268 10.2578 10.5549 9.87865 10.6976 9.68907C10.8402 9.49948 11.0305 9.49948 11.1732 9.49948C11.2683 9.49948 11.411 9.49948 11.5061 9.49948C11.6012 9.49948 11.7439 9.45209 11.8866 9.78386C12.0293 10.1156 12.3622 10.9688 12.4098 11.0162C12.4573 11.1109 12.4573 11.2057 12.4098 11.3005C12.3622 11.3953 12.3146 11.4901 12.2195 11.5849C12.1244 11.6797 12.0293 11.8219 11.9817 11.8693C11.8866 11.9641 11.7915 12.0589 11.8866 12.201C11.9817 12.3906 12.3146 12.912 12.8378 13.3859C13.5037 13.9547 14.0268 14.1443 14.2171 14.2391C14.4073 14.3339 14.5024 14.2865 14.5976 14.1917C14.6927 14.0969 15.0256 13.7177 15.1207 13.5281C15.2159 13.3385 15.3585 13.3859 15.5012 13.4333C15.6439 13.4807 16.5 13.9073 16.6427 14.0021C16.8329 14.0969 16.928 14.1443 16.9756 14.1917C17.0232 14.3339 17.0232 14.6656 16.8805 15.0448Z' fill='white'/></svg>",
      "textStatus": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo deserunt corporis quisquam atque, cupiditate praesentium, dolores mollitia labore facere consequuntur autem expedita natus iusto voluptas itaque accusantium veniam. Accusantium, deleniti?",
      "dialogueAvailable": true,
      "savePosition": 0
    },
    {
      "name": "Андрей Муратов",
      "img": "https://s3-alpha-sig.figma.com/img/d12a/e43a/6d97c9562d30aa87bc5c51fadcd72a80?Expires=1693180800&Signature=eh8W6R3epth0zWY47ktb~OSxHPiocXxK9rNYdTKKp-50GGt7eXSeaKG~u1lvmax08aLIfeNLYd74z8n3TweYoZrZU5Ik~otGvFaVyVm5dozp7kTpRXQ-fkxeYoQJIB38etlupuZvRC1GU2RzmV3rc8pNZjABZAJdjyglhEYRqWv6wyCI8r4AbWYvuyzrSsZlGqUbiMFA77liyTV9Ze6rtomQ5uylqCg62cVGRrckWbee34Vz2U1lvrQSrpXLh6nJMjgjX8-Ynmc7rwogTOeLz6qO9Zjdr45PdMGOs3VsAyjPhtMVAydouG0XYHzyBtYYV5lKMTahZzIz8nUjS5mmJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "id": 2,
      "dialogueAvailable": false,
      "status": "<svg xmlns='http://www.w3.org/2000/svg' width='27' height='26' viewBox='0 0 27 26' fill='none'><rect x='1.25' y='1' width='24' height='24' rx='12' fill='#1CB355' stroke='white' stroke-width='2'/><path d='M18.4024 7.84063C17.1183 6.56094 15.4061 5.85001 13.5988 5.85001C9.84146 5.85001 6.79756 8.88334 6.79756 12.6276C6.79756 13.8125 7.13049 14.9974 7.70122 15.9927L6.75 19.5L10.3646 18.5521C11.3634 19.0734 12.4573 19.3578 13.5988 19.3578C17.3561 19.3578 20.4 16.3245 20.4 12.5802C20.3524 10.8266 19.6866 9.12032 18.4024 7.84063ZM16.8805 15.0448C16.7378 15.424 16.0719 15.8031 15.739 15.8505C15.4537 15.8979 15.0732 15.8979 14.6927 15.8031C14.4549 15.7083 14.122 15.6135 13.7415 15.424C12.0293 14.713 10.9354 13.0068 10.8402 12.8646C10.7451 12.7698 10.1268 11.9641 10.1268 11.1109C10.1268 10.2578 10.5549 9.87865 10.6976 9.68907C10.8402 9.49948 11.0305 9.49948 11.1732 9.49948C11.2683 9.49948 11.411 9.49948 11.5061 9.49948C11.6012 9.49948 11.7439 9.45209 11.8866 9.78386C12.0293 10.1156 12.3622 10.9688 12.4098 11.0162C12.4573 11.1109 12.4573 11.2057 12.4098 11.3005C12.3622 11.3953 12.3146 11.4901 12.2195 11.5849C12.1244 11.6797 12.0293 11.8219 11.9817 11.8693C11.8866 11.9641 11.7915 12.0589 11.8866 12.201C11.9817 12.3906 12.3146 12.912 12.8378 13.3859C13.5037 13.9547 14.0268 14.1443 14.2171 14.2391C14.4073 14.3339 14.5024 14.2865 14.5976 14.1917C14.6927 14.0969 15.0256 13.7177 15.1207 13.5281C15.2159 13.3385 15.3585 13.3859 15.5012 13.4333C15.6439 13.4807 16.5 13.9073 16.6427 14.0021C16.8329 14.0969 16.928 14.1443 16.9756 14.1917C17.0232 14.3339 17.0232 14.6656 16.8805 15.0448Z' fill='white'/></svg>",
      "textStatus": "",
      "savePosition": 0
      
    },
    {
      "name": "Кишлак Ахбекаев",
      "img": "https://s3-alpha-sig.figma.com/img/e4d8/abd6/3d2f6a611369eccd464cf02c206906c7?Expires=1693180800&Signature=Dbw8BdzJjGRPXPZDvuRr5W1WggUPwt1e7CvCa~Rg7xztLmvSBNdIvujH3Dtf-s7BNGJ~RHXixFX8LodF8cRwNDgltfBsMhs2kJFzjgajsflXdCMcyf1-ryJdQQrngvJFT-X6hSH0FFSOur6XuD2wrj4~OkW9vJ7Z5uGz1W1r3jGrEDILyeO2zO7AUP800iTItA-hM6Vxhlvupjosir1o6WgHF1ptxF-atGI8PI5Kdr6ISnQJ1f-XUsmjTZnCeSU9IPWNcRG~SCJiR1gbi9S6Y~f~pDazfxDdYUWv3NoC7LuOr-Wvi6az737Nxpgc7L-LcnoXpTE16YptFxadMVuBkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "id": 3,
      "dialogueAvailable": true,
      "status": "<svg xmlns='http://www.w3.org/2000/svg' width='27' height='26' viewBox='0 0 27 26' fill='none'><rect x='1.25' y='1' width='24' height='24' rx='12' fill='#0077FF' stroke='white' stroke-width='2'/><path d='M13.8886 17.55C9.00285 17.55 6.21609 14.1341 6.09998 8.45001H8.54732C8.62771 12.622 10.432 14.3892 11.8611 14.7535V8.45001H14.1655V12.0481C15.5767 11.8933 17.0594 10.2536 17.5596 8.45001H19.8641C19.6756 9.38541 19.2999 10.2711 18.7604 11.0516C18.221 11.8322 17.5294 12.4908 16.729 12.9863C17.6224 13.4391 18.4116 14.08 19.0444 14.8666C19.6772 15.6533 20.1392 16.5679 20.4 17.55H17.8633C17.6292 16.697 17.1535 15.9333 16.4957 15.3548C15.8379 14.7764 15.0273 14.4087 14.1655 14.2981V17.55H13.8886Z' fill='white'/></svg>",
      "textStatus": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quo hic vero ipsum! Ex, sint voluptas facere sed, cupiditate cum sunt, vel vero tempore quo fuga veritatis ratione harum? In!",
      "savePosition": 0
    },
    {
      "name": "Олеся Клунская",
      "img": "https://s3-alpha-sig.figma.com/img/d5b8/5ce6/e416b84c18169135e71f3952629341c9?Expires=1693180800&Signature=M55-Y3K78uw8E9d0egNpuowMGDFhz8fo9~IsjCL90ouD7JUTCMIkVoSMUongWG3kw~E17XVcUcaToqg6fBLh6EPKAI7Ouye6bX9R6tAWWYQ61-S35CjIbtSDHsjZQLWiKEsftb947GOtjhy8ntX0Bdy1Tz54xOY~fumNvlTFehTc~f1EI5GBGLXFL-zzg5DelzKN3cHQPwpzesCE-3MdJ-7I41yM32vUcuGXIeVUiTeXB9sciedlifUCy-hWKmG6FOB5fX7BMCRAzpj-03SukDGfdMXvOcfY4AmC74WT6iscI7KuL6VxWoEmpSPEcqKw2SYo6zWh0mqdJFPcNJJf8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "id": 4,
      "dialogueAvailable": true,
      "status": "<svg xmlns='http://www.w3.org/2000/svg' width='27' height='26' viewBox='0 0 27 26' fill='none'><rect x='1.25' y='1' width='24' height='24' rx='12' fill='#0077FF' stroke='white' stroke-width='2'/><path d='M13.8886 17.55C9.00285 17.55 6.21609 14.1341 6.09998 8.45001H8.54732C8.62771 12.622 10.432 14.3892 11.8611 14.7535V8.45001H14.1655V12.0481C15.5767 11.8933 17.0594 10.2536 17.5596 8.45001H19.8641C19.6756 9.38541 19.2999 10.2711 18.7604 11.0516C18.221 11.8322 17.5294 12.4908 16.729 12.9863C17.6224 13.4391 18.4116 14.08 19.0444 14.8666C19.6772 15.6533 20.1392 16.5679 20.4 17.55H17.8633C17.6292 16.697 17.1535 15.9333 16.4957 15.3548C15.8379 14.7764 15.0273 14.4087 14.1655 14.2981V17.55H13.8886Z' fill='white'/></svg>",
      "textStatus": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et facere, perferendis vero odio ipsam explicabo totam inventore exercitationem, officia quia vitae distinctio ducimus? Accusantium ad perspiciatis ipsam dicta cupiditate consectetur?",
      "savePosition": 0
    },
    {
      "name": "Эдгар Фаев",
      "img": "https://s3-alpha-sig.figma.com/img/0ff8/89d7/d7db22dff6a559b47178df13268fa289?Expires=1693180800&Signature=TR-6Jatt9~w-UiWtb6zB~y3LApDj2npm9K7NG77WK9wwkakHZjT6R2JPx6mYXEjGV3zhsuB99vqGWeYz6pj1GP6Ran0UWDfPuq-CHxVZNQZ62j4NBAphtE13~51rKZVFQU-o9YoAbGU1MC4PRQKdlpaFa6X8Xw6LWcha9c5SGRQ2W34uFRdPF0mz6s9AZUMwmPEj2DJ-Apno3ig6GoFB1Fb79t8j2kcHSrdo7EFzabAFRL9eooRcwTDDtbq4CaV-vN9D6cg62jyOUlyxvcDtL6RW8KY5sDdQQw87opkc0NBnS-wJwegEQnwWgi6iTEgxJyDO874--qF0d0BcJafvvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "id": 5,
      "dialogueAvailable": true,
      "status": "<svg xmlns='http://www.w3.org/2000/svg' width='27' height='26' viewBox='0 0 27 26' fill='none'><rect x='1.25' y='1' width='24' height='24' rx='12' fill='#1CB355' stroke='white' stroke-width='2'/><path d='M18.4024 7.84063C17.1183 6.56094 15.4061 5.85001 13.5988 5.85001C9.84146 5.85001 6.79756 8.88334 6.79756 12.6276C6.79756 13.8125 7.13049 14.9974 7.70122 15.9927L6.75 19.5L10.3646 18.5521C11.3634 19.0734 12.4573 19.3578 13.5988 19.3578C17.3561 19.3578 20.4 16.3245 20.4 12.5802C20.3524 10.8266 19.6866 9.12032 18.4024 7.84063ZM16.8805 15.0448C16.7378 15.424 16.0719 15.8031 15.739 15.8505C15.4537 15.8979 15.0732 15.8979 14.6927 15.8031C14.4549 15.7083 14.122 15.6135 13.7415 15.424C12.0293 14.713 10.9354 13.0068 10.8402 12.8646C10.7451 12.7698 10.1268 11.9641 10.1268 11.1109C10.1268 10.2578 10.5549 9.87865 10.6976 9.68907C10.8402 9.49948 11.0305 9.49948 11.1732 9.49948C11.2683 9.49948 11.411 9.49948 11.5061 9.49948C11.6012 9.49948 11.7439 9.45209 11.8866 9.78386C12.0293 10.1156 12.3622 10.9688 12.4098 11.0162C12.4573 11.1109 12.4573 11.2057 12.4098 11.3005C12.3622 11.3953 12.3146 11.4901 12.2195 11.5849C12.1244 11.6797 12.0293 11.8219 11.9817 11.8693C11.8866 11.9641 11.7915 12.0589 11.8866 12.201C11.9817 12.3906 12.3146 12.912 12.8378 13.3859C13.5037 13.9547 14.0268 14.1443 14.2171 14.2391C14.4073 14.3339 14.5024 14.2865 14.5976 14.1917C14.6927 14.0969 15.0256 13.7177 15.1207 13.5281C15.2159 13.3385 15.3585 13.3859 15.5012 13.4333C15.6439 13.4807 16.5 13.9073 16.6427 14.0021C16.8329 14.0969 16.928 14.1443 16.9756 14.1917C17.0232 14.3339 17.0232 14.6656 16.8805 15.0448Z' fill='white'/></svg>",
      "textStatus": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque, ab magni quis inventore aut nesciunt, optio ipsum deleniti illum enim. Quasi, neque possimus incidunt reprehenderit dolorum et! Numquam, repellat?",
      "savePosition": 0
    },
    {
      "name": "Кристина Ганова",
      "img": "https://s3-alpha-sig.figma.com/img/33e3/08cd/521f222c65abecab823d4fd41749ff7f?Expires=1693180800&Signature=Sw512nZl3k32FQutxy7GhiRO2-f42qPK75szP8oKm0DUC0ABZIHLONIQlyRAxmm~qxfHteY7n29B75cT0brycj2kPtPnEZZVxyOjQc77QaOT2iOo3yn1-sAo4ld1~9CIo3Uo65cSUc-jW7avxuLi~JNHSjKRvVWu61A79dkYwtv5U6zHFaMQi4dPOcAQn3toRLUGpqhlgOR3r3AZaC5Qh8F2PcPxOX49TVQK7VFXXJGNFBuVt~jWaHLYAgB3Xs1~V-Edwduzwfufph9N5kI21FIWG5v~V5qJj59nHfhrmPiLmMyZvPA~rBg0dm27muZR8mAMRDVVg6CO1aldO83bEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "id": 6,
      "dialogueAvailable": true,
      "status": "<svg xmlns='http://www.w3.org/2000/svg' width='27' height='26' viewBox='0 0 27 26' fill='none'><rect x='1.25' y='1' width='24' height='24' rx='12' fill='white'/><path d='M20.7501 16.36C20.7501 18.3703 19.1204 20 17.1101 20C15.0998 20 13.4701 18.3703 13.4701 16.36C13.4701 14.3496 15.0998 12.72 17.1101 12.72C19.1204 12.72 20.7501 14.3496 20.7501 16.36Z' fill='#1CB355'/><path d='M13.47 9.36C13.47 11.2157 11.9657 12.72 10.11 12.72C8.25432 12.72 6.75 11.2157 6.75 9.36C6.75 7.50432 8.25432 6 10.11 6C11.9657 6 13.47 7.50432 13.47 9.36Z' fill='#0077FF'/><path d='M19.63 9.63996C19.63 11.0317 18.5018 12.16 17.11 12.16C15.7183 12.16 14.59 11.0317 14.59 9.63996C14.59 8.2482 15.7183 7.11996 17.11 7.11996C18.5018 7.11996 19.63 8.2482 19.63 9.63996Z' fill='#F16063'/><path d='M11.2299 16.0802C11.2299 17.0081 10.4778 17.7602 9.54993 17.7602C8.6221 17.7602 7.86993 17.0081 7.86993 16.0802C7.86993 15.1524 8.6221 14.4002 9.54993 14.4002C10.4778 14.4002 11.2299 15.1524 11.2299 16.0802Z' fill='#C521FF'/><rect x='1.25' y='1' width='24' height='24' rx='12' stroke='white' stroke-width='2'/></svg>",
      "textStatus": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At amet, porro ab in architecto, dolorem voluptas non deserunt eaque, quisquam rem deleniti harum facilis animi! Enim iure quasi consectetur libero.",
      "savePosition": 0
    }
  ],
  "dialog": [
    {
      "id": 1,
      "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At amet, porro ab in architecto, dolorem voluptas non deserunt eaque, quisquam rem deleniti harum facilis animi! Enim iure quasi consectetur libero.",
      "thisUser": false,
      "time": "12:36",
      "userId": 1,
      "viewed": true
    },
    {
      "id": 2,
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque, ab magni quis inventore aut nesciunt, optio ipsum deleniti illum enim. Quasi, neque possimus incidunt reprehenderit dolorum et! Numquam, repellat?",
      "thisUser": false,
      "time": "12:48",
      "userId": 1,
      "viewed": true
    },
    {
      "id": 3,
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti recusandae, magnam dolore libero praesentium earum itaque, necessitatibus, voluptatem dicta aperiam debitis neque aut ipsa explicabo excepturi nostrum perferendis dolorem!",
      "thisUser": false,
      "time": "13:00",
      "userId": 2,
      "viewed": true
    },
    {
      "id": 4,
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur odio facere provident dolorem rem, dignissimos iusto assumenda, voluptate praesentium ut laudantium autem labore rerum, eligendi esse eius quaerat exercitationem!",
      "thisUser": false,
      "time": "13:15",
      "userId": 2,
      "viewed": false
    }
  ]
}

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

const PORT = 3000;

const state = { velocity: {}, blocked: {} };

server.use(middlewares);



server.use(router);
server.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});

