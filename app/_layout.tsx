import { Slot } from 'expo-router';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { PlatformProvider } from '../src/context/PlatformContext';

export default function RootLayout() {
  return (
    <PlatformProvider>
      <View style={styles.container}>
        {/* Navbar */}
        <View style={styles.navbar}>
          <Link href="/" >
            <Pressable style={styles.navItem}>
              <Text>Home</Text>
            </Pressable>
          </Link>
          <Link href="/about">
            <Pressable style={styles.navItem}>
              <Text>About</Text>
            </Pressable>
          </Link>
          <Link href="/login">
            <Pressable style={styles.navItem}>
              <Text>Login</Text>
            </Pressable>
          </Link>
          <Link href="/signup">
            <Pressable style={styles.navItem}>
              <Text>Sign Up</Text>
            </Pressable>
          </Link>
        </View>

        {/* Page content */}
        <View style={styles.content}>
          <Slot />
        </View>
      </View>
    </PlatformProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'skyblue',
    borderBottomWidth: 1,
    borderBottomColor: '#2b2929',
  },
  navItem: {
    marginRight: 20,
  },
  content: {
    flex: 1,
    backgroundColor: 'green'
  },
});