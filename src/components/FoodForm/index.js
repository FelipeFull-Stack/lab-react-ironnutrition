import { useState } from 'react';
import { Divider } from 'antd';


export function FoodForm(props) {

    const { addFoods } = props;

    const [form, setForm] = useState({//Form resultado dos Inputs
        name: "",
        image: "",
        calories: 0,
        servings: 0,
    })

    function handleChange(event) {//Exibe o digitado no Campo INPUT
        setForm((currentState) => {
            return { ...currentState, [event.target.name]: event.target.value }
        })
    }

    function handleAddFood(event) {//Adiciona Food e renderiza o resto na tela
        event.preventDefault();
        addFoods((currentState) => [form, ...currentState])
    }

    return (


        <form className='m2' onSubmit={handleAddFood}>
            <Divider>Add Food Entry</Divider>

            <label htmlFor='inputName'>Name</label>
            <input
                id='inputName'
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
            />

            <label htmlFor='inputImage'>Image</label>
            <input
                id='inputImage'
                type='text'
                name='image'
                value={form.image}
                onChange={handleChange}
            />

            <label htmlFor='inputCalories'>Calories</label>
            <input
                id='inputCalories'
                type='number'
                name='calories'
                value={form.calories}
                onChange={handleChange}
            />

            <label htmlFor='inputServings'>Servings</label>
            <input
                id='inputServings'
                type='number'
                name='servings'
                value={form.servings}
                onChange={handleChange}
            />
            <strong>Total Calories: {form.calories * form.servings}</strong>
            <button type="submit">Create</button>
        </form>
    );
}