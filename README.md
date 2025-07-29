# Fase – Favoris

## Stack utilisée
- React Native (Expo) + NativeWind (Tailwind)
- Supabase (PostgreSQL + API)
- Context API pour la gestion d’état

## Choix techniques
- Persistance des favoris via Supabase (pas de mock local)
- Utilisation d’un **utilisateur mock** (`EXPO_PUBLIC_MOCK_USER_ID`) pour simplifier l’intégration
- Événements stockés en base et récupérés depuis Supabase

## Limites / améliorations
- Authentification non implémentée (mock)
- Pas de Row Level Security (à ajouter),
- Gestion des erreurs basique

## Démo
Télécharger demo.mov
