export const SignIn = () => {
    return (
        <div className="page page-center">
            <div className="container container-tight py-4">
                <div className="text-center mb-4">
                    <h1>ITForum</h1>
                </div>
                <div className="card card-md">
                    <div className="card-body">
                        <h2 className="h2 text-center mb-4">Login to your account</h2>
                        <form action="./" method="get" autoComplete="off" noValidate>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" placeholder="your@email.com"
                                       autoComplete="off"/>
                            </div>
                            <div className="mb-2">
                                <label className="form-label">
                                    Password
                                    <span className="form-label-description">
                    <a href="./forgot-password.html">I forgot password</a>
                  </span>
                                </label>
                                <div className="input-group input-group-flat">
                                    <input type="password" className="form-control" placeholder="Your password"
                                           autoComplete="off"/>
                  <span className="input-group-text">
                    <a href="./SignIn#SignIn.jsx" className="link-secondary" data-bs-toggle="tooltip" aria-label="Show password"
                       data-bs-original-title="Show password">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                             viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                             stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"
                                      fill="none"></path><circle cx="12"
                                                                 cy="12"
                                                                 r="2"></circle><path
                            d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path></svg>
                    </a>
                  </span>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="form-check">
                                    <input type="checkbox" className="form-check-input"/>
                                        <span className="form-check-label">Remember me on this device</span>
                                </label>
                            </div>
                            <div className="form-footer">
                                <button type="submit" className="btn btn-primary w-100">Sign in</button>
                            </div>
                        </form>
                    </div>
                    <div className="hr-text">or</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col"><a href="./SignIn#SignIn.jsx" className="btn w-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon text-github" width="24"
                                     height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                </svg>
                                Login with Github
                            </a></div>
                            <div className="col"><a href="./SignIn#SignIn.jsx" className="btn w-100">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24"
                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                                </svg>
                                Login with Facebook
                            </a></div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-muted mt-3">
                    Don't have account yet? <a href="./sign-up.html" tabIndex={-1}>Sign up</a>
                </div>
            </div>
        </div>
    )
}
export default SignIn;