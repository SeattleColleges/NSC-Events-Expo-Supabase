# NSC-Events-Expo-Supabase

This project is an event management application built with Expo (React Native) for the frontend and Supabase for the backend. It provides functionalities for college students and local communities to manage and discover events at North Seattle College.

# Pre-Reqs
- Check if node is installed w/ `node -v`
- Check if git is installed w/ `git -v`
- [Install docker](https://www.docker.com/get-started/)
- [Clone repo using GitHub documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)


# Scripts

*   `npm start`: Starts the Expo development server.
*   `npm run android`: Starts the Expo development server and opens the app on an Android emulator or device.
*   `npm run ios`: Starts the Expo development server and opens the app on an iOS simulator or device.
*   `npm run start:web`: Starts the Expo development server and opens the app in a web browser.
*   `npm run start:web:cache`: Starts the Expo development server and opens the app in a web browser, clearing the web cache first.
*   `npm run db:start`: Starts the local Supabase services.
*   `npm run db:start:mac`: Starts the local Supabase services, specifically for macOS, by setting the Docker platform.
*   `npm run db:start:debug`: Starts the local Supabase services in debug mode.
*   `npm run db:start:mac:debug`: Starts the local Supabase services in debug mode for macOS.
*   `npm run db:stop`: Stops the local Supabase services.
*   `npm run db:status`: Shows the status of the local Supabase services.
*   `npm run db:reset`: Resets the local Supabase database.
*   `npm run db:delete:docker-container-volume`: Cleans up all Supabase-related Docker containers and volumes.
*   `npm run db:delete:docker-images`: Deletes all local Supabase Docker images.

# Workflows
## Project setup
1. Run terminal with `npm install . ` in the cloned project's directory.
1. In the terminal, run `npm run db:start` to spin up the local supabase terminal. 
- Create your .env file using the values printed in the terminal after spinning up the local supabase instance.
1. `npm run start:web` to start up the frontend development server.
Note: Currently there are kinks needed to work out with the new backend scripts. Login and logout will not work for now... But components do work!

# Resources
- [Review before implementing components or pages: Introduction to Expo Router Layout Files](https://youtu.be/Yh6Qlg2CYwQ?si=c5Zy0PBnwWYwzOtV)
- [Figma Design](https://www.figma.com/design/nswMhBThzHDCqsR7F2HxbF/NSC-Dev-site-redesign-wireframes?node-id=73-1231&t=SbPUpY0Pq8fQwScA-1)
- [React Native Component Library](https://reactnative.dev/docs/components-and-apis)
- [CSS Reference](https://css-tricks.com/)
- [Expo Router](https://docs.expo.dev/versions/latest/sdk/router/)

This is a living document, so please feel free to add any useful tips or workflows