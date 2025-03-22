// import '@expo/metro-runtime';
import '../global.css';
import 'expo-dev-client';
import { createReplicacheExpoSQLiteKVStore } from '@react-native-replicache/react-native-expo-sqlite';
import { Zero } from '@rocicorp/zero';
import { ZeroProvider } from '@rocicorp/zero/react';
import { Stack } from 'expo-router';
import { useMemo } from 'react';

import { schema } from '../lib/schema';

import { getJWT, getUserId } from '~/lib/auth';

export default function RootLayout() {
    const jwt = getJWT();
    const userID = getUserId(jwt);

    const z = useMemo(
        () =>
            new Zero({
                userID,
                auth: jwt,
                server: 'http://localhost:4848',
                kvStore: createReplicacheExpoSQLiteKVStore,

                schema,
            }),
        [jwt, userID]
    );

    if (!z) {
        return null;
    }

    return (
        <ZeroProvider zero={z}>
            <Stack>
                <Stack.Screen name="index" options={{ title: 'Home' }} />
            </Stack>
        </ZeroProvider>
    );
}
