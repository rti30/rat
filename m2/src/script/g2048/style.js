export default ({
   wrapper: `
display: grid;
justify-content: center;
grid-template-areas:
       "header header"
       "field record";
gap: 30px;
`,

   field: `
grid-area: field;
display: grid;
gap: 10px;
cursor: pointer;
touch-action: none;
`,
   cell: `
border: 1px solid #8e8e8e;
border-radius: 10px;
overflow: hidden;
background-color: #7b68ee;
`,
   cellItem: `
   text-shadow: 1px 1px 2px #8e8e8e;
background-color: #7b68ee;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
transition: opacity, text-shadow 0.5s ease-in-out;
`,
   header: `
grid-area: header;
overflow: hidden;
margin: 0 auto;
text-align: center;
display: grid;
grid-template-areas:
       "login login"
       "score best"
       "back restart";
grid-auto-columns: 1fr;
border: 2px solid #7b68ee;
margin-bottom: 20px;
`,
   login: `
grid-area: login;
`,
   loginInput: `
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0,0,0,0.06);
`,
   score: `
position: relative;
grid-area: score;
`,
   scoreDiff: `
   top: 50%;
   right: 50%;
   position: absolute;
   transform: translate(-50%, -50%);
    ` ,
   best: `
    position: relative;
    grid-area: best;
  `,
   restart: `
grid-area: restart;
`,
   restartButton: `
width: 100%;
`,
   back: `
grid-area: back;
`,
   backButton: `
width: 100%;
`,
   record: `
   grid-area: record;
   `,
   recordTable: `
   margin-top: 15px;
   display: flex;
   flex-direction: column;
   gap: 5px;
   border: 1px solid rgb(000, 104, 238);`
   ,
   recordRow: `
   padding: 5px;
   display: flex;
   flex-wrap: wrap;
    gap: 10px 10px;
    border-bottom: 1px solid rgb(123, 104, 238);
    `,
   recordLogin: `
     flex: 1 1 50%;
     `,
   button: `
     color: #212529;
     text-align: center;
     cursor: pointer;
     background-color: #eee;
     border: 1px solid #bdbdbd;
     padding: .375rem .75rem;
     border-radius: .25rem;
     margin: 5px;
     transition: box-shadow 0.5s ease-in-out;
   `,
   //TODO Возможно есть смысл разбить модуль на части и сделать слияние объектов
   newNumberTextShadow: "1px 1px 2px red",
   textShadow: `rgb(142, 142, 142) 1px 1px 2px`,
   glowShadow: `0 0 20px #fff, 0 0 30px #8e8e8e, 0 0 40px #8e8e8e, 0 0 50px #8e8e8e, 0 0 60px #8e8e8e, 0 0 70px #8e8e8e, 0 0 80px #8e8e8e`,
   shadowActiveButton: `0 0 0 2px rgb(000, 104, 238), 0 0 0 2px rgb(123, 104, 238)`,
   defaultColor: "#000000",
   disabledBgColor: "rgb(230 219 219)",
   disabledColor: "rgb(111 111 111)"
})