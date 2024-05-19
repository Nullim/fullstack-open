```mermaid
sequenceDiagram
  actor user 
  box Green Frontend
  participant browser
  end
  box Red Backend
  participanet server
  end

  user->>browser: The user writes a note

  Note right of user: Note contents: "cool app!"

  user->>browser: The user clicks on 'Save' button
  activate browser
  
  Note right of browser: Event handler prevents default behavior of form

  Note right of browser: Creates note with its content and timestamp

  Note right of browser: Pushes to list array, rerenders and sends to server
  deactivate browser
  browser->>user: Present rerendered notes to user

  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  activate server

  Note right of browser: POST contains JSON data including note's properties

  Note right of browser: Content-Type is also defined as 'application/json'

  server-->>browser: Status code 201 Created

  Note right of browser: Notice how the server does not redirect

  deactivate server
```