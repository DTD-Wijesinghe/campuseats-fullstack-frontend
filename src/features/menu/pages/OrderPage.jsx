import { useState } from "react";

function OrderPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    qty: 1,
  });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  function validate(values) {
    const e = {};
    if (values.name.trim().length < 2) {
      e.name = "Name is too short";
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) {
      e.email = "Enter a valid email";
    }
    if (Number(values.qty) < 1) {
      e.qty = "Quantity must be at least 1";
    }
    return e;
  }

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const foundErrors = validate(form);
    setErrors(foundErrors);

    if (Object.keys(foundErrors).length === 0) {
      setDone(true);
    }
  }

  if (done) {
    return (
      <h2>Thanks, {form.name}! Your order has been received.</h2>
    );
  }

  return (
    <div>
      <h2>Place Order</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
          <br />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />
          <br />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email}</span>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input
            type="number"
            name="qty"
            value={form.qty}
            onChange={handleChange}
          />
          <br />
          {errors.qty && <span style={{ color: "red" }}>{errors.qty}</span>}
        </div>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default OrderPage;
