import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { View, Text, TextInput, Button, Picker, ActivityIndicator, Alert } from 'react-native';

const CATEGORIES = [
  { value: 'finance', label: 'Финансы' },
  { value: 'marketing', label: 'Маркетинг' },
  { value: 'product', label: 'Продукт' },
  { value: 'sales', label: 'Продажи' },
  { value: 'legal', label: 'Юридические' },
  { value: 'government', label: 'Государство' },
  { value: 'other', label: 'Прочее' },
];

export default function CreateGoal({ navigation, user }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0].value);
  const [endDate, setEndDate] = useState('');
  const [targetValue, setTargetValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!title.trim() || !endDate.trim() || !targetValue.trim()) {
      Alert.alert('Ошибка', 'Заполните все поля');
      return;
    }
    setLoading(true);
    const { error } = await supabase.from('goals').insert({
      user_id: user.id,
      title,
      category,
      end_date: endDate,
      target_value: parseFloat(targetValue),
      status: 'active',
      progress: 0
    });
    setLoading(false);
    if (error) {
      Alert.alert('Ошибка', error.message);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={{flex:1, padding:16}}>
      <Text style={{fontWeight:'bold', fontSize:18, marginBottom:12}}>Создать цель</Text>
      <TextInput placeholder="Название" value={title} onChangeText={setTitle} style={{borderWidth:1, borderColor:'#ccc', borderRadius:6, marginBottom:12, padding:8}} />
      <Text>Категория:</Text>
      <Picker selectedValue={category} onValueChange={setCategory} style={{marginBottom:12}}>
        {CATEGORIES.map(cat => <Picker.Item key={cat.value} label={cat.label} value={cat.value} />)}
      </Picker>
      <TextInput placeholder="Дедлайн (ГГГГ-ММ-ДД)" value={endDate} onChangeText={setEndDate} style={{borderWidth:1, borderColor:'#ccc', borderRadius:6, marginBottom:12, padding:8}} />
      <TextInput placeholder="Целевое значение" value={targetValue} onChangeText={setTargetValue} keyboardType="numeric" style={{borderWidth:1, borderColor:'#ccc', borderRadius:6, marginBottom:12, padding:8}} />
      <Button title={loading ? 'Создание...' : 'Создать'} onPress={handleCreate} disabled={loading} />
    </View>
  );
} 