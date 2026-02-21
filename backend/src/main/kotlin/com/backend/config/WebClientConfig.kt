package com.backend.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Component
import org.springframework.web.reactive.function.client.WebClient

@Configuration
class WebClientConfig {

    @Bean
    fun webClient(): WebClient =
        WebClient.builder()
            .codecs { it.defaultCodecs().maxInMemorySize(16 * 1024 * 1024) }
            .build()
}

@Component
class ApiExecutor(private val webClient: WebClient) {

    fun <T : Any> get(url: String, responseType: Class<T>): T? =
        webClient.get()
            .uri(url)
            .retrieve()
            .bodyToMono(responseType)
            .block()
}