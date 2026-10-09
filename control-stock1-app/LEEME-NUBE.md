# Sincronizar el .apk y la web (Firebase)

Con esto, el inventario queda en la nube: lo que cambies en el celular aparece en la web y al revés. También sirve como respaldo, y funciona sin internet (se pone al día cuando vuelve la conexión).

Haz primero lo de `LEEME.md`. Luego, desde el computador:

## 1. Crear el proyecto
1. Entra a https://console.firebase.google.com con tu cuenta de Google.
2. Toca **Crear un proyecto**, ponle un nombre (por ejemplo `control-stock`) y desactiva Google Analytics.

## 2. Activar el inicio de sesión
1. Menú izquierdo: **Compilación > Authentication > Comenzar**.
2. En **Método de acceso** elige **Correo electrónico/contraseña**, actívalo y guarda.

## 3. Crear la base de datos
1. **Compilación > Firestore Database > Crear base de datos**.
2. Elige una ubicación cercana (por ejemplo `southamerica-east1`) y el modo **producción**.
3. Abre la pestaña **Reglas**, borra lo que haya, pega esto y toca **Publicar**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

Esas reglas hacen que cada cuenta solo vea sus propios datos.

## 4. Copiar la configuración
1. Toca la rueda de engranaje junto a **Descripción general del proyecto** y entra a **Configuración del proyecto**.
2. En **Tus apps** toca el ícono web `</>`, ponle un nombre y toca **Registrar app**.
3. Copia el bloque `firebaseConfig` que aparece (apiKey, authDomain, projectId, etc.).

## 5. Pegarla en GitHub
1. En tu repositorio, abre `www/firebase-config.js` y toca el lápiz para editarlo.
2. Cambia `window.FIREBASE_CONFIG = null;` por `window.FIREBASE_CONFIG = { ... };` con los valores que copiaste (el ejemplo del archivo muestra cómo).
3. Toca **Commit changes**.
4. GitHub vuelve a armar todo solo. Cuando termine, baja el nuevo `control-stock.apk` desde **Releases** e instálalo encima del anterior.

## 6. Primer uso
1. Abre la app (o la web). Aparece una pantalla de acceso.
2. Escribe tu correo y una contraseña de al menos 6 caracteres y toca **Crear cuenta**.
3. Entra con ese mismo correo y contraseña en el .apk y en la web: verás el mismo inventario.

## Consejo de seguridad
Cuando ya hayas creado tu cuenta, en Firebase ve a **Authentication > Configuración > Acciones del usuario** y desactiva **Habilitar la creación (registro)**. Así nadie más puede crear cuentas en tu proyecto.

## Datos que ya tenías
Si ya cargaste productos antes de conectar la nube, usa **Inventario > Copia de seguridad e importar > Guardar copia (.json)** en el dispositivo donde estaban e impórtala después de iniciar sesión.
