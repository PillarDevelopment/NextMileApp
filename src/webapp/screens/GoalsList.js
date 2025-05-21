import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { View, Text, Button, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

export default function GoalsList({ navigation, user }) {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    supabase
      .from('goals')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setGoals(data || []);
        setLoading(false);
      });
  }, [user]);

  if (loading) return <ActivityIndicator size="large" style={{marginTop: 40}} />;

  return (
    <View style={{flex:1, padding:16}}>
      <Button title="Создать цель" onPress={() => navigation.navigate('CreateGoal')} />
      <FlatList
        data={goals}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('GoalDetail', { goal: item })}>
            <View style={{padding:16, marginVertical:8, backgroundColor:'#f2f2f2', borderRadius:8}}>
              <Text style={{fontWeight:'bold', fontSize:16}}>{item.title}</Text>
              <Text>Категория: {item.category || '-'}</Text>
              <Text>Дедлайн: {item.end_date || '-'}</Text>
              <Text>Прогресс: {item.progress || 0}%</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={{marginTop:32, textAlign:'center'}}>Нет целей</Text>}
      />
    </View>
  );
} 