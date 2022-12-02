import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Heading, SectionList, Text, VStack } from "native-base";
import { useState } from "react";

const DATA = [
  {
    title: "26.08.22",
    data: ["Puxada Frontal", "Remada Unilateral"]
  },
  {
    title: "27.08.22",
    data: ["Puxada Frontal"]
  }
]

export function History() {


  const [exercises, setExercises] = useState(DATA)

  return(
    <VStack flex={1}>
      <ScreenHeader title="Histórico de exercícios" />
      <SectionList 
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <HistoryCard />
        )}
        renderSectionHeader={({section}) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3} fontFamily="heading">
              {section.title}
          </Heading>
        )}
        contentContainerStyle={exercises.length === 0 && {flex: 1, justifyContent: 'center'}}
        ListEmptyComponent={() => (
          <Text
            color="gray.100"
            textAlign="center"
          >
            Não há exercícios em seu histórico.{'\n'}
            Bora começar a rechear esta lista?
          </Text>
        )}
        px={8}
      />
    </VStack>
  )
}