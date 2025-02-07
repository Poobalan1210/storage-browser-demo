
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from '@aws-amplify/ui-react';
import { StorageBrowser } from '../components/StorageBrowser';

function App() {

  return (
    <Authenticator 
      hideSignUp
      components={{
        Header() {
          return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ margin: '10px 0' }}>Welcome to S3 Bucket files</h2>
            </div>
          );
        },
      }}
    >
    
      {({ signOut, user }) => (
        <main>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ margin: '10px 0' }}>Welcome to S3 Bucket files</h2>
            </div>
            <h1>Hello {user?.signInDetails?.loginId}</h1>
            <button onClick={signOut}>Sign out</button>
            
          {/* StorageBrowser Component */}
          <h2>Your Files</h2>
          <StorageBrowser />
        </main>
      )}
    </Authenticator>
  );
}

export default App;
