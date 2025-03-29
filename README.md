# QuickFix

## Configuraciones de repositorios:

- Ejecutar una sola vez en cualquier directorio para que git sea sensible a mayúsculas y minusculas: 
```
git config --global core.ignorecase false
```

## NOMBRES DE RAMAS:

dev/QF-*

> [!IMPORTANT]
> El nombre de la rama tiene que incluir el identificador único de la tarjeta para que la enlace automáticamente.
> No va a enlazar la tarjeta hasta que no pusheen la rama al repositorio.


## Otros

### Si el puerto queda tomado aunque maten el proceso:

![image](https://github.com/user-attachments/assets/67763dbc-1038-4af9-a091-229667186afb)

### Múltples README.md

Una vez que creen un archivo en alguna de las carpetas que tengan README, pueden eliminar ese archivo que solamente mantenía la estructura en git (no importa si dos personas lo borran en diferentes commits)