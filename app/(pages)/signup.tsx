import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Alert } from "react-native";
import { useState, useEffect } from "react";
import { supabase } from "../../src/lib/supabase";
import { Link } from "expo-router";
import { usePlatform } from "../../src/context/PlatformContext";

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const platform = usePlatform();

    useEffect(() => {
        setIsFormValid(email.length > 0 && password.length > 0 && name.length > 2);
    }, [email, password, name]);

    const handleSignUp = async () => {
        if (!isFormValid) return;

        const { error, data } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    name
                }
            }
        });

        if (error) {
            if (platform === 'web') {
                window.alert(error.message);
            } else {
                Alert.alert('Error', error.message);
            }
        } else {
            const successMessage = 'Sign-up successful! User data: ' + JSON.stringify(data.user, null, 2);
            if (platform === 'web') {
                window.alert(successMessage);
            } else {
                Alert.alert('Success', successMessage);
            }
        }
    };

    return (
        <View style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>Sign Up</Text>

            {/* Name Label and Input */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="John Doe"
                    placeholderTextColor="#888"
                    value={name}
                    onChangeText={setName}
                    autoCapitalize="words"
                />
            </View>

            {/* Email Label and Input */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="example@example.com"
                    placeholderTextColor="#888"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            {/* Password Label and Input */}
            <View style={[styles.inputContainer, styles.passwordContainer]}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="•••••••••••"
                    placeholderTextColor="#888"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity style={[styles.loginButton, !isFormValid && styles.disabledButton]} onPress={handleSignUp} disabled={!isFormValid}>
                <Text style={styles.loginButtonText}>Sign Up</Text>
            </TouchableOpacity>

            {/* Sign-In Section */}
            <View style={styles.signUpContainer}>
                <Text style={styles.text}>Already have an account? </Text>
                <Link href="/login" asChild>
                    <TouchableOpacity>
                        <Text style={styles.link}>Sign In</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: width > 400 ? 32 : 28,
        fontWeight: 'normal',
        marginBottom: 20,
    },
    inputContainer: {
        width: '85%',
        maxWidth: 400,
        marginBottom: 15,
    },
    passwordContainer: {
        marginBottom: 30,
    },
    label: {
        fontSize: 18,
        color: '#333',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: width > 400 ? 50 : 45,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
    loginButton: {
        width: '85%',
        maxWidth: 400,
        height: width > 400 ? 50 : 45,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 15,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    disabledButton: {
        backgroundColor: '#ccc',
    },
    link: {
        color: '#007BFF',
        fontSize: 14,
        marginTop: 5,
    },
    signUpContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    text: {
        fontSize: 14,
        color: '#666',
    },
});