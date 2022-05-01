import React from "react";  

export const TodoForm: React.FC = () =>
{
    return (
        <div className="input-field mt2">
            <input type="text" id="title" />
            <label htmlFor="title" className="active">
                Prosze wpisac login
            </label>
            

        </div>
    )
}