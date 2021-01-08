layout: pages/index.ts
key: home
---

Make a Voxel/Polygon engine, designing features as to maximize the type of game I'm making. Idea is to utilize existing research papers for implementing all the parts of the engine IDE. The idea is to build various procedural generation mechanism that enables one to create a rich world, and then modify the generated objects by hand. This should avoid the content creation bottleneck of one developer.

Any voxel engine should have a good search functionality, and be keyboard based

## Notes

- Map generator, freeze certain parts of map
- Boss music
- Low poly mode === Potato mode

## Features

- FPS
- Rag-doll
- Destructible environment
- Producerad map generation and map builder tool
- Procedural item generation
- Procedural text generation
- Procedural character generation
- Procedural AI
- Deform ground

## Roadmap

In order to create the game I want to create, I need to divide up the work between three parts:

- Core: The core engine itself, responsible for rendering the game, lightning, physics, etc.
- UI: The UI for building the games
- Procedural Generator: Procedural generation of multiple objects (people, tree's, houses, tiles, etc.). This is to avoid creating individual items, characters, maps, etc. build a tool which procedurally generates the mentioned objects and then allow one to modify them to truly create unique objects.
- Change color of tiles via palette editor

## Engine

### Core

The engine consists of multiple parts:

- texture
- lightning
- ray tracing
- physics

### Procedural Generator

Objects to make with variations:

- tree
- plants
- bush
- person
- car
- map generation

Use voronoi?

## Keywords

- OpenGL
- Vulkan
- Voxel
- Lightning
- Texture
- Physics
- Procedural
- Ray casting voxel algorithm
- Ray tracing
- Ambient occlusion

## Design

Make game engine possible of rendering low poly designs like this:

- https://i.pinimg.com/originals/d5/85/82/d58582ec8e1ad910557b6686b06ed162.png
- https://www.pinterest.se/pin/500040364877265699/

## Ideas

- Dream: Different type of page/game/scene transitions, melting of paintings
- Fly around in my game and auto generate cities, then allow one to modify them
- 3D scan faces for game, using real faces
- Walking should be natural, like humans walk

## Workspace

- https://paroj.github.io/gltut/Basics/Introduction.html
- https://vulkan-tutorial.com/Overview
- https://sites.google.com/site/letsmakeavoxelengine/home/chunks
- https://www.youtube.com/watch?v=0R23npUCCnw
- https://www.youtube.com/watch?v=yHZ3-AMJA6Y

## Documentation

- [Best Vulcan Tutorials](https://www.fasterthan.life/blog/2017/7/11/i-am-graphics-and-so-can-you-part-1)
- [Vulkan Tutorial](https://vulkan-tutorial.com)
- [Learning Modern 3D Graphics Programming](https://paroj.github.io/gltut/)
- [Raytracing in One Week](https://github.com/RayTracing/raytracing.github.io)
- [Physically Based Rendering](http://www.pbr-book.org/3ed-2018/contents.html)

## Inspiration

- [Raytracing](https://github.com/W4RH4WK/Raygun/blob/master/README.md)

## Tools

- IMGUI
- PhysX C++ Library
