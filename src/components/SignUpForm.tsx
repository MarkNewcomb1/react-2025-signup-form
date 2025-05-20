import React, { useState, useEffect } from 'react';

const SignUpForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
    setIsFormValid(
      form.name.trim() && validateEmail(form.email) && form.password.length >= 6
    );
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
        ...prev,
        [name]: value,
    }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email) newErrors.email = "Email is required.";
    else if (!validateEmail(form.email))
      newErrors.email = "Invalid email address.";
    if (!form.password) newErrors.password = "Password is required.";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
        setIsSubmitted(true);
        setErrors({});
    } else {
        setErrors(validationErrors);
        setIsSubmitted(false);
    }
  };

  return (
        <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
            />
            {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
            )}
        </div>

        <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2 px-4 rounded text-white ${
            isFormValid ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400"
          }`}
        >
            Submit</button>
      </form>

      {isSubmitted && (
        <p className="text-green-600 mt-4 font-medium">
          Form submitted successfully!
        </p>
      )}
    </div>
  )
}

export default SignUpForm