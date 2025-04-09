import React from "react";

export default function FormLearn() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);

    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(formEl);
    console.log(formData);
    console.log(email);
    console.log(password);

    formEl.reset();
  }

  function signUp(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const fieldset = formData.get("radio");
    const checkBoxes = formData.getAll("checkbox");
    const selectOptions = formData.get("favColor");

    const data = Object.fromEntries(formData);
    const dietaryData = formData.getAll("checkbox");
    console.log(data);
    console.log(dietaryData);

    // console.log(email);
    // console.log(password);
    // console.log(fieldset);
    // console.log(checkBoxes);
    // console.log(selectOptions);
  }

  return (
    <main className="form-learn">
      <h1>Signup Form</h1>
      <form action={signUp}>
        <label htmlFor="theEmail">Email: </label>
        <input defaultValue="test@gmail.com" id="theEmail" type="email" name="email" placeholder="Email" />

        <br />

        <label htmlFor="thePassword">Password: </label>
        <input defaultValue="test123" id="thePassword" type="password" name="password" placeholder="Your password" />

        <br />

        <label htmlFor="description">Description: </label>
        <textarea name="description" id="description"></textarea>

        <fieldset className="form-field">
          <legend>Employment Status</legend>
          <label htmlFor="radio">
            <input value="unemployed" type="radio" name="radio" id="radio1" />
            Unemployed
          </label>
          <label htmlFor="radio">
            <input defaultChecked={true} value="employed" type="radio" name="radio" id="radio2" />
            Employed
          </label>
          <label htmlFor="radio">
            <input value="part-time" type="radio" name="radio" id="radio3" />
            Part-time
          </label>
        </fieldset>

        <fieldset className="form-field">
          <legend>Diet plan</legend>
          <label htmlFor="checkbox">
            <input value="rice" type="checkbox" name="checkbox" id="checkbox1" />
            rice
          </label>
          <label htmlFor="checkbox">
            <input defaultChecked={true} value="potato" type="checkbox" name="checkbox" id="checkbox2" />
            potato
          </label>
          <label htmlFor="checkbox">
            <input value="wheat" type="checkbox" name="checkbox" id="checkbox3" />
            wheat
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your favourite color?</label>
        <select name="favColor" id="favColor">
          <option disabled value="">
            --Choose-a-color--
          </option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Purple">Purple</option>
        </select>

        <button>Submit</button>
      </form>
    </main>
  );
}
