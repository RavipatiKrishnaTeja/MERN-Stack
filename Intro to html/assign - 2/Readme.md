## Form: collect user data.

# tags 

    -<input> (several types)
    - type
      ->text
    - password
    - email
    - number
    - date
    - time
    - checkbox
    - radio
    - file
    - range
    - submit

<button> (button)
    - type
        -button
        -submit
        -reset

    <select> (dropdown-single selection)
    <option>

    <textarea> (an textfield to entire multiple lines of text)

    -Attributes
        input
            - type (required)
            - name (optional --> Backend lo Store)
            - placeholder (optional)
            - value (optional - default value to an input value)
            - required (optional - used to validating empty field)
            - maxlength (works with type="text", used to specify max length)
            - step
            - row
            - cols
            - disabled
            - autocomplete (used to control auto-filling fields)

label - 
    - gives information to the browser about input fields
    - can maintain cleaner code.

    form tag attributes (link your client form to the server backend)

    - method (HTTP method)
        - GET (Read)
        - POST (create)
        - PUT/PATCH (update)
        _ DELETE (delete)

    HTTP --> Hypertext transfer protocol (set of instruction)
        - client to server : HTTP request
        - server to client : HTTP response.