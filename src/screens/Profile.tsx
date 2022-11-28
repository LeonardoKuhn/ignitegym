import React, { useState } from "react";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, ScrollView, VStack, Skeleton, Text, Heading } from "native-base";
import { TouchableOpacity } from "react-native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

const PHOTO_SIZE = 33

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)

  return(
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Center mt={6} px={10}>
          {
            photoIsLoading ?
            <Skeleton 
              w={PHOTO_SIZE} 
              h={PHOTO_SIZE} 
              rounded='full'
              startColor="gray.500"
              endColor="gray.400"
            />
            :
            <UserPhoto 
              source={{ uri: 'https://github.com/leonardokuhn.png' }}
              alt='Foto do usuário'
              size={PHOTO_SIZE}
            />
          }
          <TouchableOpacity>
            <Text
              color='green.500'
              fontWeight='bold'
              fontSize='md'
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input 
            bg='gray.600'
            placeholder="Nome"
          />
          <Input 
            bg='gray.600'
            placeholder="E-mail"
            isDisabled
          />
        </Center>

        <VStack
          px={10}
          mt={12}
          mb={9}
        >
          <Heading
            color='gray.200'
            fontSize='md'
            mb={2}
          >
            Alterar senha
          </Heading>

          <Input 
            bg='gray.600'
            placeholder='Senha antiga'
          />
          <Input 
            bg='gray.600'
            placeholder='Nova senha'
          />
          <Input 
            bg='gray.600'
            placeholder='Confirme a nova senha'
          />

          <Button 
            title="Atualizar"
            mt={4}
          />
        </VStack>
      </ScrollView>
    </VStack>
  )
}