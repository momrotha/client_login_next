

export default function Home() {
  return (
    <div>
      <h1>Login Demo</h1>

      <a href="http://localhost:8080/oauth2/authorization/google">
        <button>Login with Google</button>
      </a>

      <a href="http://localhost:8080/oauth2/authorization/github">
        <button>Login with GitHub</button>
      </a>
    </div>
  );
}

