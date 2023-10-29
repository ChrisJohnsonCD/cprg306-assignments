"use Client";
import { useUserAuth } from "../_utils/auth-context"


export default function Page (){

    const{ user, gitHubSignIn, firebaseSignOut} = useUserAuth ();

    return(
        <main>
            <header>
            <h1> Secured Page</h1>
            </header>
            <section>
                { user ? (
                    <p>Welcome, {user.displayName}  you are signed in!</p>
                ) : (
                    <p> you must be signed in to view this age</p>
                )}
                
            </section>
        </main>
    )
}