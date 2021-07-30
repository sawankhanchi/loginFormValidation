import React from 'react';
import './ValidateLoginForm.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

let schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  phone: yup.number().required(),
  address: yup.string().required(),
});

function ValidateLoginForm() {

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input_field">
                        Name <input type="text" {...register('name')} />
                    </div>
                    <div className="input_field">
                        Email <input type="text" {...register('email')} />
                    </div>
                    <div className="input_field">
                        Phone <input type="text" {...register('phone')} />
                    </div>
                    <div className="input_field">
                        Address <textarea rows="3" cols="30" {...register('address')} />
                    </div>
                    <br/>
                    <br/>
                    <div className="input_field">
                        Profile Url <input type="text" />
                    </div>

                    <div className="input_field"> Gender
                        <label>
                            <input type="radio"  name="gender"/> Male
                        </label>
                        <label>
                            <input type="radio" name="gender"/> Female
                        </label>
                    </div>
                    
                    <div className="input_field"> Hobbies
                        <label>
                            <input type="checkbox" />Cricket
                        </label>
                        <label>
                            <input type="checkbox" />Football
                        </label>
                    </div>

                    <div className="btn_next">
                        <button type="submit" name="submit">Submit</button>
                        <button type="reset" name="reset">Reset</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ValidateLoginForm;
