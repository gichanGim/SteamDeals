package com.backend.domain.game

import com.backend.infra.steam.SteamService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/games")
class GameController(
    private val steamService: SteamService
) {
    @GetMapping
    public fun getGames(){
        steamService.updateSteamGames();
    }
}