import React, {useRef} from 'react'

function UnControlled():React.ReactElement {
    const fileInputRef = useRef(null)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(
          `Selected file - ${fileInputRef.current.files[0].name}`
        );
      }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Upload file:
                <input type="file" ref={fileInputRef} />
            </label>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default UnControlled