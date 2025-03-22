import { useQuery, useZero } from '@rocicorp/zero/react';
import { Text, View } from 'react-native';

import { Schema } from '~/lib/schema';

export default function Screen() {
    const z = useZero<Schema>();

    const query = z.query.message.limit(100);
    const [allMessages, messagesDetail] = useQuery(query);
    console.log(allMessages);

    return (
        <View className="flex-1 items-center justify-center">
            <Text>{allMessages.length} Messages</Text>
            {allMessages.map((message) => (
                <Text key={message.id}>{message.body}</Text>
            ))}
        </View>
    );
}
