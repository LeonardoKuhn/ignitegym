import { FlatList, Heading, HStack, Text, VStack } from "native-base";

import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { useState } from "react";

import { ExerciseCard, ExerciseProps } from "@components/ExerciseCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

const exercisesInit = [
  {
    name: 'Remada Lateral',
    description: '3 Séries x 12 repetições',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTnstCP3zN59I_8RoNnbQaOstw2zR2rIYJYS9NMU&s'
  },
  {
    name: 'Remada Lateral1',
    description: '3 Séries x 12 repetições',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTnstCP3zN59I_8RoNnbQaOstw2zR2rIYJYS9NMU&s'
  },
  {
    name: 'Remada Lateral2',
    description: '3 Séries x 12 repetições',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTnstCP3zN59I_8RoNnbQaOstw2zR2rIYJYS9NMU&s'
  },
  {
    name: 'Remada Lateral3',
    description: '3 Séries x 12 repetições',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTnstCP3zN59I_8RoNnbQaOstw2zR2rIYJYS9NMU&s'
  },
  {
    name: 'Remada Lateral4',
    description: '3 Séries x 12 repetições',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTnstCP3zN59I_8RoNnbQaOstw2zR2rIYJYS9NMU&s'
  },
  {
    name: 'Remada Lateral5',
    description: '3 Séries x 12 repetições',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTnstCP3zN59I_8RoNnbQaOstw2zR2rIYJYS9NMU&s'
  },
  {
    name: 'Remada Lateral6',
    description: '3 Séries x 12 repetições',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTnstCP3zN59I_8RoNnbQaOstw2zR2rIYJYS9NMU&s'
  },
  {
    name: 'Remada Lateral7',
    description: '3 Séries x 12 repetições',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTnstCP3zN59I_8RoNnbQaOstw2zR2rIYJYS9NMU&s'
  },
  {
    name: 'Remada Lateral8',
    description: '3 Séries x 12 repetições',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTnstCP3zN59I_8RoNnbQaOstw2zR2rIYJYS9NMU&s'
  },
  {
    name: 'Remada Lateral9',
    description: '3 Séries x 12 repetições',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTnstCP3zN59I_8RoNnbQaOstw2zR2rIYJYS9NMU&s'
  },
  {
    name: 'Remada Lateral10',
    description: '3 Séries x 12 repetições',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTnstCP3zN59I_8RoNnbQaOstw2zR2rIYJYS9NMU&s'
  }
]

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const [groupSelected, setGroupSelected] = useState('costa')
  const [groups, setGroups] = useState<string[]>(['costas', 'ombros', 'bíceps', 'tríceps', 'pernas', 'peito', 'abdômen'])
  const [exercises, setExercises] = useState<ExerciseProps[]>(exercisesInit)

  function handleOpenExerciseDetails() {
    navigation.navigate('exercise')
  }

  return(
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={(item) => (item)}
        renderItem={({item}) => (
          <Group 
            name={item} 
            isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ pl: 3, pr: 5 }}
        my={4}
        minH={10}
        maxH={10}
      />

      <VStack px={8} mt={4} flex={1}>
        <HStack justifyContent="space-between" mb={5} minH={5}>
          <Heading 
            color="gray.200"
            fontSize="md"
          >
            Exercícios
          </Heading>

          <Text 
            color="gray.300"
            fontSize="sm"
          >
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => (item.name)}
          renderItem={({item}) => (
            <ExerciseCard
              name={item.name}
              imageUrl={item.imageUrl}
              description={item.description}
              onPress={handleOpenExerciseDetails}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{paddingBottom: 12}}
        />

      </VStack>
    </VStack>
  )
}