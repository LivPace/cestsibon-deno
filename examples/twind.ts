import { tw } from "https://esm.sh/twind";





function renderBody() {
  return `
    <h1 class="${tw`text(3xl blue-500)`}">Hello from Deno</h1>
    <form>
      <input name="user">
      <button class="${tw`text(2xl red-500)`}">
        Submit
      </button>
    </form>
  `;
}

function ssr() {
  
  const body = renderBody();
  

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Hello from Deno</title>
        
      </head>
      <body>
        ${body}
      </body>
    </html>`;
}

console.log(ssr());