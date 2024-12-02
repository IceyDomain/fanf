namespace SpriteKind {
    export const loading = SpriteKind.create()
    export const Cam = SpriteKind.create()
    export const CryingChild2 = SpriteKind.create()
    export const CryingChild3 = SpriteKind.create()
    export const Press_Play = SpriteKind.create()
    export const Story = SpriteKind.create()
}
namespace StatusBarKind {
    export const Time = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
    info.setScore(3)
    tiles.placeOnTile(Night_Guard, tiles.getTileLocation(18, 21))
    Camera_system = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . c d 5 d c . . . . . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Cam)
    animation.runImageAnimation(
    Camera_system,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . c d 5 d c . . . . . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . b d b c . . . . . 
        . . . . b b c 5 5 5 c b b . . . 
        . . . . b 5 5 5 1 5 5 5 b . . . 
        . . . c c 5 5 5 1 5 5 5 c c . . 
        . . b b 5 5 5 1 1 1 5 5 5 b b . 
        . . d d 5 1 1 1 1 1 1 1 5 d d . 
        . . b b 5 5 5 1 1 1 5 5 5 b b . 
        . . . c c 5 5 5 1 5 5 5 c c . . 
        . . . . b 5 5 5 1 5 5 5 b . . . 
        . . . . b b c 5 5 5 c b b . . . 
        . . . . . . c b d b c . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . 1 1 . . . 1 1 1 . . . . . . 
        . . 1 1 . 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 . . 1 1 1 1 1 1 1 . . . . 
        . . . . . . . 1 1 1 . . . . 1 . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    controller.moveSprite(Camera_system)
    controller.moveSprite(Night_Guard, 0, 0)
    tiles.placeOnTile(Camera_system, tiles.getTileLocation(39, 1))
    scene.cameraFollowSprite(Camera_system)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.InBackground)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile48`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(5, 3), assets.tile`myTile4`)
    tiles.setWallAt(tiles.getTileLocation(5, 3), false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tiles.tileAtLocationEquals(Camera_system.tilemapLocation(), assets.tile`myTile`)) {
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        sprites.destroyAllSpritesOfKind(SpriteKind.Cam)
        tiles.placeOnTile(Night_Guard, tiles.getTileLocation(16, 24))
        controller.moveSprite(Night_Guard)
        scene.cameraFollowSprite(Night_Guard)
    }
})
statusbars.onStatusReached(StatusBarKind.Time, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Fixed, 400, function (status) {
    game.showLongText("2 a.m", DialogLayout.Bottom)
    tiles.setTileAt(Chica.tilemapLocation(), assets.tile`myTile85`)
    for (let value of tiles.getTilesByType(assets.tile`FakeTile Cv`)) {
        tiles.setTileAt(value, assets.tile`myTile83`)
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if ((tiles.tileAtLocationEquals(Night_Guard.tilemapLocation(), assets.tile`myTile14`) || tiles.tileAtLocationEquals(Night_Guard.tilemapLocation(), assets.tile`myTile15`)) && Night_1_Timer.value > 500) {
        color.Brighten.startScreenEffect(5000)
        color.pauseUntilFadeDone()
        color.clearFadeEffect()
    } else if ((tiles.tileAtLocationEquals(Night_Guard.tilemapLocation(), assets.tile`myTile14`) || tiles.tileAtLocationEquals(Night_Guard.tilemapLocation(), assets.tile`myTile15`)) && Night_1_Timer.value <= 500) {
        color.Brighten.startScreenEffect(5000)
        color.pauseUntilFadeDone()
        color.Darken.startScreenEffect(5000)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(tiles.getTileLocation(23, 23), assets.tile`myTile40`)
        tiles.setTileAt(tiles.getTileLocation(23, 24), assets.tile`myTile40`)
        tiles.setWallAt(tiles.getTileLocation(23, 23), true)
        tiles.setWallAt(tiles.getTileLocation(23, 24), true)
        tiles.setTileAt(tiles.getTileLocation(20, 26), assets.tile`myTile53`)
        info.changeScoreBy(1)
        scene.cameraShake(8, 1000)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    }
})
statusbars.onStatusReached(StatusBarKind.Time, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Fixed, 0, function (status) {
    game.splash("6 a.m")
    tiles.setTileAt(tiles.getTileLocation(17, 27), assets.tile`myTile33`)
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(17, 27), assets.tile`myTile33`)) {
        sprites.destroy(Night_Guard)
        tiles.setCurrentTilemap(tilemap`level3`)
        Night_Guard = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . c d 5 d c . . . . . 
            . . . b c c d 5 5 5 d c c b . . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b c c d 5 5 5 d c c b . . 
            . . . . . . c d 5 d c . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        controller.moveSprite(Night_Guard)
        tiles.placeOnTile(Night_Guard, tiles.getTileLocation(3, 7))
        animation.runImageAnimation(
        Night_Guard,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . c d 5 d c . . . . . 
            . . . b c c d 5 5 5 d c c b . . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b c c d 5 5 5 d c c b . . 
            . . . . . . c d 5 d c . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . b d b c . . . . . 
            . . . . b b c 5 5 5 c b b . . . 
            . . . . b 5 5 5 1 5 5 5 b . . . 
            . . . c c 5 5 5 1 5 5 5 c c . . 
            . . b b 5 5 5 1 1 1 5 5 5 b b . 
            . . d d 5 1 1 1 1 1 1 1 5 d d . 
            . . b b 5 5 5 1 1 1 5 5 5 b b . 
            . . . c c 5 5 5 1 5 5 5 c c . . 
            . . . . b 5 5 5 1 5 5 5 b . . . 
            . . . . b b c 5 5 5 c b b . . . 
            . . . . . . c b d b c . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 1 . . . . . . . . . . 
            . . 1 1 . . . 1 1 1 . . . . . . 
            . . 1 1 . 1 1 1 1 1 1 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . . 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 . . 1 1 1 1 1 1 1 . . . . 
            . . . . . . . 1 1 1 . . . . 1 . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        scene.cameraFollowSprite(Night_Guard)
    } else if (controller.B.isPressed() && tiles.tileAtLocationEquals(tiles.getTileLocation(9, 9), assets.tile`myTile29`)) {
        tiles.setCurrentTilemap(tilemap`level3`)
        color.clearFadeEffect()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.InBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(tiles.getTileLocation(10, 23), assets.tile`myTile39`)
        tiles.setTileAt(tiles.getTileLocation(10, 24), assets.tile`myTile39`)
        tiles.setWallAt(tiles.getTileLocation(10, 23), true)
        tiles.setWallAt(tiles.getTileLocation(10, 24), true)
        tiles.setTileAt(tiles.getTileLocation(13, 26), assets.tile`myTile52`)
        info.changeScoreBy(1)
        scene.cameraShake(8, 1000)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    }
})
statusbars.onStatusReached(StatusBarKind.Time, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Fixed, 500, function (status) {
    game.showLongText("1 a.m", DialogLayout.Bottom)
    color.Darken.startScreenEffect()
    color.Darken.startScreenEffect()
    for (let value of tiles.getTilesByType(assets.tile`myTile68`)) {
        tiles.setWallAt(value, true)
    }
    tiles.setTileAt(Bonnie.tilemapLocation(), assets.tile`myTile80`)
    for (let value of tiles.getTilesByType(assets.tile`FakeTile`)) {
        tiles.setTileAt(value, assets.tile`myTile81`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Press_Play, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        controller.moveSprite(Night_Guard, 0, 0)
        story.showPlayerChoices("Play", "options")
        if (story.checkLastAnswer("Play")) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Text)
            sprites.destroyAllSpritesOfKind(SpriteKind.Press_Play)
            SelectScreen()
        } else if (story.checkLastAnswer("options")) {
        	
        }
    }
})
scene.onOverlapTile(SpriteKind.CryingChild3, assets.tile`myTile83`, function (sprite, location) {
    if (Chica.tileKindAt(TileDirection.Left, assets.tile`myTile78`)) {
        Chica.follow(Night_Guard)
    } else if (Chica.tileKindAt(TileDirection.Left, assets.tile`myTile40`)) {
        pause(5000)
        tiles.placeOnRandomTile(Chica, assets.tile`myTile85`)
    }
})
statusbars.onStatusReached(StatusBarKind.Time, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Fixed, 100, function (status) {
    game.showLongText("5 a.m", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.CryingChild2, SpriteKind.Player, function (sprite, otherSprite) {
    game.setGameOverEffect(false, effects.slash)
    game.setGameOverMessage(false, "YOU DIED!!!!!")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile49`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(5, 3), assets.tile`myTile47`)
    tiles.setWallAt(tiles.getTileLocation(5, 3), true)
    tiles.placeOnTile(Freddy, tiles.getTileLocation(7, 3))
    Freddy.setFlag(SpriteFlag.GhostThroughWalls, true)
    Freddy.follow(Night_Guard, 50)
    tiles.setTileAt(tiles.getTileLocation(4, 3), assets.tile`myTile4`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.InBackground)
})
statusbars.onStatusReached(StatusBarKind.Time, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Fixed, 200, function (status) {
    game.showLongText("4 a.m", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Cam, assets.tile`myTile74`, function (sprite, location) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(39, 1))
    sprite.setFlag(SpriteFlag.GhostThroughWalls, false)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.setGameOverEffect(false, effects.slash)
    game.gameOver(false)
    game.setGameOverMessage(false, "GAME OVER!")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile52`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(tiles.getTileLocation(10, 23), assets.tile`myTile78`)
        tiles.setTileAt(tiles.getTileLocation(10, 24), assets.tile`myTile78`)
        tiles.setWallAt(tiles.getTileLocation(10, 23), true)
        tiles.setWallAt(tiles.getTileLocation(10, 24), true)
        tiles.setTileAt(location, assets.tile`myTile9`)
        info.changeScoreBy(-1)
        scene.cameraShake(8, 1000)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    }
})
scene.onOverlapTile(SpriteKind.CryingChild2, assets.tile`myTile81`, function (sprite, location) {
    if (Bonnie.tileKindAt(TileDirection.Right, assets.tile`myTile78`)) {
        Bonnie.follow(Night_Guard)
    } else if (Bonnie.tileKindAt(TileDirection.Right, assets.tile`myTile39`)) {
        pause(5000)
        tiles.placeOnRandomTile(Bonnie, assets.tile`myTile80`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Story, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroy(Night_Guard)
        Night_Guard = sprites.create(img`
            . . . 8 8 8 8 8 8 . . . 
            . 8 8 8 8 5 5 8 8 8 8 . 
            8 8 8 8 8 5 5 8 8 8 8 8 
            f 8 8 8 8 8 8 8 8 8 8 f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            8 8 f 8 8 1 1 8 8 f 8 8 
            8 8 f 8 8 1 1 8 8 f 8 8 
            4 4 f 8 8 6 6 8 8 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `, SpriteKind.Player)
        tiles.placeOnTile(Night_Guard, tiles.getTileLocation(16, 24))
        controller.moveSprite(Night_Guard)
        scene.cameraFollowSprite(Night_Guard)
        Night_1_Timer = statusbars.create(20, 4, StatusBarKind.Time)
        Night_1_Timer.max = 600
        Night_1_Timer.value = 600
        Night_1_Timer.attachToSprite(Night_Guard)
        Night_1_Timer.setColor(7, 2)
        Night_1_Timer.setLabel("Time")
        tiles.setCurrentTilemap(tilemap`level2`)
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(15, 20), assets.tile`myTile37`)) {
            music.play(music.melodyPlayable(music.siren), music.PlaybackMode.InBackground)
            tiles.setTileAt(tiles.getTileLocation(15, 20), assets.tile`myTile28`)
            game.showLongText("Hello? Hello, hello? Uh, I wanted to record a message for you to help you get settled in on your first night. Um, I actually worked in that office before you. I'm finishing up my last week now, as a matter of fact. So, I know it can be a bit overwhelming, but I'm here to tell you there's nothing to worry about. Uh, you'll do fine. So, let's just focus on getting you through your first week. Okay? Uh, let's see, first there's an introductory greeting from the company that I'm supposed to read. Uh, it's kind of a legal thing, you know. Um, \"Welcome to Freddy Fazbear's Pizza. A magical place for kids and grown-ups alike, where fantasy and fun come to life.\" Fazbear Entertainment is not responsible for damage to property or person. Upon discovering that damage or death has occurred, a missing person report will be filed within 90 days, or as soon property and premises have been thoroughly cleaned and bleached, and the carpets have been replaced.  Blah, blah, blah. Now that might sound bad, I know, but there's really nothing to worry about. Uh, the animatronic characters here do get a bit quirky at night, but do I blame them? No. If I were forced to sing those same stupid songs for twenty years and I never got a bath? I'd probably be a bit irritable at night too. So, remember, these characters hold a special place in the hearts of children and we need to show them a little respect, right? Okay.  So, just be aware, the characters do tend to wander a bit. Uh, they're left in some kind of free roaming mode at night. Uh... Something about their servos locking up if they get turned off for too long. Uh, they used to be allowed to walk around during the day too. But then there was The Bite of '87. Yeah. I-It's amazing that the human body can live without the frontal lobe, you know?  Uh, now concerning your safety, the only real risk to you as a night watchman here, if any, is the fact that these characters, uh, if they happen to see you after hours probably won't recognize you as a person. They'll pr- they'll most likely see you as a metal endoskeleton without its costume on. Now since that's against the rules here at Freddy Fazbear's Pizza, they'll probably try to... forcefully stuff you inside a Freddy Fazbear suit. Um, now, that wouldn't be so bad if the suits themselves weren't filled with crossbeams, wires, and animatronic devices, especially around the facial area. So, you could imagine how having your head forcefully pressed inside one of those could cause a bit of discomfort... and death. Uh, the only parts of you that would likely see the light of day again would be your eyeballs and teeth when they pop out the front of the mask, heh.  Y-Yeah, they don't tell you these things when you sign up. But hey, first day should be a breeze. I'll chat with you tomorrow. Uh, check those cameras, and remember to close the doors only if absolutely necessary. Gotta conserve power. Alright, good night.", DialogLayout.Bottom)
        } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(15, 20), assets.tile`myTile28`)) {
            music.stopAllSounds()
        }
        info.setLife(100)
        info.setScore(1)
        Chica = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 5 b f 5 5 f b 5 5 5 . . 
            . . 5 5 5 1 f 5 5 f 1 5 5 5 . . 
            . . f 5 5 5 d d d d 5 5 5 f . . 
            . . . f 5 5 d d d d 5 5 f . . . 
            . . 5 5 f e e e e e e f 5 5 . . 
            . . 5 d f 5 e 2 2 e 5 f d 5 . . 
            . . 5 5 f 5 e 2 2 e 5 f 5 5 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.CryingChild3)
        tiles.placeOnTile(Chica, tiles.getTileLocation(12, 2))
        Freddy = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . . . f e e f . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e e e e e e e e e e e e . . 
            . . e e e b f e e f b e e e . . 
            . . e e e 1 f e e f 1 e e e . . 
            . . f e e e d d d d e e e f . . 
            . . . f e e d d d d e e f . . . 
            . . e e f e e e e e e f e e . . 
            . . e d f e e e e e e f d e . . 
            . . e e f e e e e e e f e e . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(Freddy, tiles.getTileLocation(14, 2))
        Bonnie = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . 8 8 8 8 8 8 8 8 8 8 . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 b f 8 8 f b 8 8 8 . . 
            . . 8 8 8 1 f 8 8 f 1 8 8 8 . . 
            . . f 8 8 8 9 9 9 9 8 8 8 f . . 
            . . . f 8 8 9 9 9 9 8 8 f . . . 
            . . 8 8 f 8 8 8 8 8 8 f 8 8 . . 
            . . 8 9 f 8 8 8 8 8 8 f 9 8 . . 
            . . 8 8 f 8 8 8 8 8 8 f 8 8 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.CryingChild2)
        tiles.placeOnTile(Bonnie, tiles.getTileLocation(16, 2))
        game.splash("How to play", "Survive until 6 a.m")
        game.splash("How to play(controls)", "A is to open all doors meaning both doors will be opened at once ")
        game.splash("How to play(controls)", "B is for the camera system press b to get out of it")
        game.splash("How to play(controls)", "Go onto a button to close the door")
    }
})
function StartScreen () {
    tiles.setCurrentTilemap(tilemap`level13`)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeefffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeefffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeefffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeefffffeeeeeeeeeeeeeeeeeefffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeefffffeeeeeefffffeeeeeeeeffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeefffffeeeeeefffffeeeeeeeeffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeefffffeeeeeefffffeeeeeeeeffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeefffffeeeeeefffffeeeeeeeeeeffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeffffffffffffffffffffffeeeeeeeeeeeeeeefffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeffffffffffffffffffffffffeeeeeeeeeeeeefffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeefff1111111111111111111ffeeeeeeeeeeeeeeefffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeefff1111111111111111111ffeeeeeeeeeeeeeeefffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeefff1111111111111111111ffeeeeeeeeeeeeeeefffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeefff1111111111111111111ffeeeeeeeeeeeeeeefffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeff1111111111111111111ffeeeeeeeeeeeeeeeeffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeefffeeeeeeffffff1111111111ffffffeeeeeeeeeeeeeeeeffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeffff1111111111fffffeeeeeeeeeeeeeeeeeefff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeefff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffeeeeeeeeeeeeeeeeeeeeeeefff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeefffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeefffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeee
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeee
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeee
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeee
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeee
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeee
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeee
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeee
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeee
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffeeeeeeeeeeeeeeeeee
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffeeeeeeeeeeeeeeeee
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffeeeeeeeeeeeeeeeee
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffeeeeeeeeeeeeeeee
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffeeeeeeeeeef
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeefffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeefffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeefffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeefffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeefffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeefffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeefffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeefffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeefffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeefffffeeeeeeeeeeeeefffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeefffffeeeeeeeeeeeeefffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeefffffffffeeeeeeeeeeeefffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeefffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeefffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeefffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    Fnaf_Sign = textsprite.create("Five Nights At Freddy's", 0, 1)
    A_Button = sprites.create(img`
        . . . . 6 6 6 6 6 6 6 . . . . 
        . . 6 6 7 7 7 7 7 7 7 6 6 . . 
        . 6 6 7 7 7 8 8 8 7 7 7 6 6 . 
        . 6 7 7 7 8 8 7 8 8 7 7 7 6 . 
        . c 7 7 8 8 8 8 8 8 8 7 7 c . 
        . c 9 7 8 7 7 7 7 7 8 7 9 c . 
        . c 9 9 7 7 7 7 7 7 7 9 9 c . 
        . c 6 6 9 9 9 9 9 9 9 6 6 c . 
        c c 6 6 6 6 6 6 6 6 6 6 6 c c 
        c d c c 6 6 6 6 6 6 6 c c d c 
        c d d d c c c c c c c d d d c 
        c c b d d d d d d d d d b c c 
        c c c c c b b b b b c c c c c 
        c c b b b b b b b b b b b c c 
        . c c b b b b b b b b b c c . 
        . . . c c c c c c c c c . . . 
        `, SpriteKind.Press_Play)
    Play_Button = textsprite.create("")
    Play_Button.setText("Play")
    Night_Guard = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . c d 5 d c . . . . . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(Night_Guard)
    Night_Guard.setStayInScreen(true)
    Play_Button.setFlag(SpriteFlag.RelativeToCamera, false)
    A_Button.setFlag(SpriteFlag.RelativeToCamera, false)
    Night_Guard.setFlag(SpriteFlag.RelativeToCamera, false)
    Fnaf_Sign.setFlag(SpriteFlag.RelativeToCamera, false)
    animation.runImageAnimation(
    Night_Guard,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . c d 5 d c . . . . . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . b d b c . . . . . 
        . . . . b b c 5 5 5 c b b . . . 
        . . . . b 5 5 5 1 5 5 5 b . . . 
        . . . c c 5 5 5 1 5 5 5 c c . . 
        . . b b 5 5 5 1 1 1 5 5 5 b b . 
        . . d d 5 1 1 1 1 1 1 1 5 d d . 
        . . b b 5 5 5 1 1 1 5 5 5 b b . 
        . . . c c 5 5 5 1 5 5 5 c c . . 
        . . . . b 5 5 5 1 5 5 5 b . . . 
        . . . . b b c 5 5 5 c b b . . . 
        . . . . . . c b d b c . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . 1 1 . . . 1 1 1 . . . . . . 
        . . 1 1 . 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 . . 1 1 1 1 1 1 1 . . . . 
        . . . . . . . 1 1 1 . . . . 1 . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    Fnaf_Sign.setPosition(77, 21)
    Play_Button.setPosition(76, 89)
    A_Button.setPosition(76, 89)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.InBackground)
})
scene.onOverlapTile(SpriteKind.Cam, assets.tile`myTile55`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    tiles.placeOnTile(sprite, tiles.getTileLocation(29, 29))
})
info.onLifeZero(function () {
    color.FadeToBlack.startScreenEffect()
    pause(randint(100, 5000))
    if (Night_1_Timer.value <= 500) {
        game.setGameOverMessage(false, "Reached 1 A.M")
        game.gameOver(false)
    } else if (Night_1_Timer.value <= 400) {
        game.setGameOverMessage(false, "Reached 2 A.M")
        game.gameOver(false)
    } else if (Night_1_Timer.value <= 300) {
        game.setGameOverMessage(false, "Reached 3 A.M")
        game.gameOver(false)
    } else if (Night_1_Timer.value <= 200) {
        game.setGameOverMessage(false, "Reached 4 A.M")
        game.gameOver(false)
    } else if (Night_1_Timer.value <= 100) {
        game.setGameOverMessage(false, "Reached 5 A.M")
        game.setGameOverPlayable(false, music.melodyPlayable(music.powerDown), true)
        game.gameOver(false)
    }
})
scene.onOverlapTile(SpriteKind.Cam, assets.tile`myTile70`, function (sprite, location) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(39, 1))
    sprite.setFlag(SpriteFlag.GhostThroughWalls, false)
})
scene.onOverlapTile(SpriteKind.Cam, assets.tile`myTile57`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    tiles.placeOnTile(sprite, tiles.getTileLocation(10, 29))
})
statusbars.onStatusReached(StatusBarKind.Time, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Fixed, 300, function (status) {
    game.showLongText("3 a.m", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile53`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(tiles.getTileLocation(23, 23), assets.tile`myTile78`)
        tiles.setTileAt(tiles.getTileLocation(23, 24), assets.tile`myTile78`)
        tiles.setWallAt(tiles.getTileLocation(23, 23), false)
        tiles.setWallAt(tiles.getTileLocation(23, 24), false)
        tiles.setTileAt(tiles.getTileLocation(20, 26), assets.tile`myTile13`)
        info.changeScoreBy(-1)
        scene.cameraShake(8, 1000)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    }
})
function SelectScreen () {
    controller.moveSprite(Night_Guard)
    Story_Mode = textsprite.create("Story Mode")
    animation.runMovementAnimation(
    Story_Mode,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
    Night_Select = textsprite.create("Night Select")
    Custom_Night = textsprite.create("Custom Night")
    mySprite = sprites.create(img`
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . 2 2 3 3 3 3 2 e . . . . 
        . . . 2 3 d 1 1 d d 3 2 e . . . 
        . . 2 3 1 d 3 3 3 d d 3 e . . . 
        . 2 3 1 3 3 3 3 3 d 1 3 b e . . 
        . 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
        2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
        2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
        2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
        2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
        e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
        e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
        e 3 d 3 3 1 d d 3 d 1 b b e e . 
        . e 3 1 1 d d 1 1 1 b b e e e . 
        . . e 3 3 3 3 3 3 b e e e e . . 
        . . . e e e e e e e e e e . . . 
        `, SpriteKind.Story)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile48`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(5, 3), assets.tile`myTile4`)
    tiles.setWallAt(tiles.getTileLocation(5, 3), false)
})
scene.onOverlapTile(SpriteKind.Cam, assets.tile`myTile4`, function (sprite, location) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(39, 1))
    sprite.setFlag(SpriteFlag.GhostThroughWalls, false)
})
let mySprite: Sprite = null
let Custom_Night: TextSprite = null
let Night_Select: TextSprite = null
let Story_Mode: TextSprite = null
let Play_Button: TextSprite = null
let A_Button: Sprite = null
let Fnaf_Sign: TextSprite = null
let Freddy: Sprite = null
let Bonnie: Sprite = null
let Night_1_Timer: StatusBarSprite = null
let Chica: Sprite = null
let Camera_system: Sprite = null
let Night_Guard: Sprite = null
StartScreen()
game.onUpdateInterval(5000, function () {
    if (tiles.tileAtLocationEquals(Night_Guard.tilemapLocation(), assets.tile`myTile78`)) {
        Night_1_Timer.value += -5
    }
})
game.onUpdateInterval(30000, function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(16, 2), assets.tile`myTile80`)) {
        tiles.placeOnRandomTile(Bonnie, assets.tile`myTile81`)
    }
})
game.onUpdateInterval(10000, function () {
    if (info.score() == 1 && (tiles.tileAtLocationEquals(Night_Guard.tilemapLocation(), assets.tile`myTile78`) || tiles.tileAtLocationEquals(Night_Guard.tilemapLocation(), assets.tile`myTile4`))) {
        info.changeLifeBy(-1)
    } else if (info.score() == 2 && (tiles.tileAtLocationEquals(Night_Guard.tilemapLocation(), assets.tile`myTile78`) || tiles.tileAtLocationEquals(Night_Guard.tilemapLocation(), assets.tile`myTile4`))) {
        info.changeLifeBy(-2)
    } else if (info.score() == 3 && (tiles.tileAtLocationEquals(Night_Guard.tilemapLocation(), assets.tile`myTile78`) || tiles.tileAtLocationEquals(Night_Guard.tilemapLocation(), assets.tile`myTile4`))) {
        info.changeLifeBy(-3)
    }
})
game.onUpdateInterval(40000, function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(12, 2), assets.tile`myTile85`)) {
        tiles.placeOnRandomTile(Chica, assets.tile`myTile83`)
    }
})
