# Fase – Favoris

## Stack utilisée
- React Native (Expo) + NativeWind (Tailwind)
- Supabase (PostgreSQL + API)
- Context API pour la gestion d’état

## Choix techniques
- Persistance des favoris via Supabase (pas de mock local)
- Utilisation d’un **utilisateur mock** (`EXPO_PUBLIC_MOCK_USER_ID`) pour simplifier l’intégration
- Événements stockés en base et récupérés depuis Supabase

## Limites / possibilités d'améliorations
- Authentification non implémentée (mock)
- Pas de Row Level Security (à ajouter), par exemple vérifier que l'user ne met pas en favoris chez un autre user ou autre
- Gestion des erreurs basique
- Améliorer la liste des évènements avec des filtres et des tris
- Une interface plus attrayante
- Rajouter des tags ou autres pour proposer des évènements similaires aux favoris
- Ou mettre en place un agent IA pour proposer des évènements selon ses favoris

## Démo
Télécharger demo.mov
