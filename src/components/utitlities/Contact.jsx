import React from "react";

const Contact = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    query: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Email sent successfully!");
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Have questions or need assistance? Feel free to reach out to us.
        </p>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Email</h2>
          <p className="text-lg text-gray-600">
            You can email us at <a href="mailto:saran.hiruthik83@gmail.com" className="text-red-500">saran.hiruthik83@gmail.com</a>.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Owner</h2>
          <p className="text-lg text-gray-600">
            This site is owned by <span className="font-bold">Saran Hiruthik M</span>.
          </p>
        </div>
        <div className="text-center">
          <button
            className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300"
            onClick={() => setShowModal(true)}
          >
            Send a Message
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Query</label>
                <textarea
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
