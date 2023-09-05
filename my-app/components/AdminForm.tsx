export default function AdminForm() {
  return (
    <div>
      <form action="/form">
        <label htmlFor="name">Enter name:</label>
        <input type="text" name="name" />
        <label htmlFor="price">Enter price:</label>
        <input type="number" name="price" />
        <label htmlFor="trial_length_days">Enter free trial length:</label>
        <input type="number" name="trial_length_days" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
