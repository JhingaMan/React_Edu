import React from 'react'

function Button() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <button
      onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
      className="btn-fake-dark-mode"
    >
      {isFakeDark ? "☀️" : "🌙"}
    </button>
  );
}

export default Button
