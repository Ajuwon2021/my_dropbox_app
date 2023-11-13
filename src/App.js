import { Routes, Route } from "react-router-dom";

import { Amplify } from 'aws-amplify';
import { Authenticator, View, Image, useTheme, Text } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '@aws-amplify/ui-react/styles.css';

import NavBar from "./components/Common/NavBar";
import FootBar from "./components/Common/FootBar";
import HomePage from "./components/HomePage/HomePage";
import MyDrive from "./components/MyDrive/MyDrive";
import Profile from "./components/UserDetails/Profile";
import FileUpload from "./components/FileUpload/FileUpload";

Amplify.configure(awsExports);

const App = () => {
  const components = {
    Header() {
      const { tokens } = useTheme();

      return (
        <View
          textAlign="center"
          padding={tokens.space.large}
          className="site-logo"
        >
          <Image
            alt="Site logo"
            src="/images/logo.png"
            width={150}
            height={150}
          />
        </View>
      );
    },

    Footer() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>
            &copy; All Rights Reserved
          </Text>
        </View>
      );
    }
  };

  return (
    <Authenticator loginMechanisms={["email"]} components={components}>
      {({ signOut, user }) => (
        <div>
          <NavBar logOut={signOut} />
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/" exact={true} element={<HomePage />} />
            <Route path="/drive" element={<MyDrive />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/file_uploads" element={<FileUpload />} />
          </Routes>
          <FootBar />
        </div>
      )}
    </Authenticator>
  );
};

export default App;