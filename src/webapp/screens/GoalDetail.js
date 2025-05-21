import React from 'react';
import { View, Text } from 'react-native';

export default function GoalDetail({ route }) {
  const { goal } = route.params;
  return (
    <View style={{flex:1, padding:16}}>
      <Text style={{fontWeight:'bold', fontSize:20, marginBottom:12}}>{goal.title}</Text>
      <Text>Категория: {goal.category || '-'}</Text>
      <Text>Дедлайн: {goal.end_date || '-'}</Text>
      <Text>Целевое значение: {goal.target_value || '-'}</Text>
      <Text>Прогресс: {goal.progress || 0}%</Text>
      <Text>Статус: {goal.status || '-'}</Text>
      <Text style={{marginTop:12}}>Описание: {goal.description || '-'}</Text>
    </View>
  );
} 