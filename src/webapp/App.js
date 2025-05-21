import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GoalsList from './screens/GoalsList';
import CreateGoal from './screens/CreateGoal';
import GoalDetail from './screens/GoalDetail';
import { View, Text, ActivityIndicator } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    let telegramId = null;
    try {
      if (tg?.initDataUnsafe?.user?.id) {
        telegramId = String(tg.initDataUnsafe.user.id);
      } else {
        // fallback для dev
        telegramId = process.env.NODE_ENV === 'development' ? 'dev-test-user' : null;
      }
    } catch (e) {
      telegramId = null;
    }
    if (!telegramId) {
      setError('Нет Telegram ID. Откройте через Telegram WebApp.');
      setLoading(false);
      return;
    }
    // Проверяем пользователя в Supabase
    supabase
      .from('users')
      .select('*')
      .eq('telegram_id', telegramId)
      .single()
      .then(({ data, error }) => {
        if (data) setUser(data);
        else setUser(null);
        setLoading(false);
      })
      .catch(() => {
        setError('Ошибка запроса к базе');
        setLoading(false);
      });
  }, []);

  if (loading) return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><ActivityIndicator size="large" /></View>;
  if (error) return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{error}</Text></View>;

  if (!user) {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Пользователь не найден. Зарегистрируйтесь через Telegram-бота.</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GoalsList">
        <Stack.Screen name="GoalsList" options={{ title: 'Мои цели' }}>
          {props => <GoalsList {...props} user={user} />}
        </Stack.Screen>
        <Stack.Screen name="CreateGoal" options={{ title: 'Создать цель' }}>
          {props => <CreateGoal {...props} user={user} />}
        </Stack.Screen>
        <Stack.Screen name="GoalDetail" options={{ title: 'Детали цели' }} component={GoalDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 