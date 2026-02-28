package com.backend.config

import com.backend.domain.auth.CustomOAuth2UserService
import com.backend.domain.auth.OAuth2SuccessHandler
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.web.SecurityFilterChain

@Configuration
@EnableWebSecurity
class SecurityConfig(
    private val oAuth2UserService: CustomOAuth2UserService,
    private val oAuth2SuccessHandler: OAuth2SuccessHandler
) {
    @Bean
    fun securityFilterChain(http: HttpSecurity): SecurityFilterChain {
        http
            .csrf { it.disable() }
            .sessionManagement {
                it.sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
                it.maximumSessions(1)
            }
            .authorizeHttpRequests {
                it
                    .requestMatchers("/api/auth/**").permitAll()
                    .anyRequest().authenticated()
            }
            .oauth2Login {
                it.userInfoEndpoint { endpoint ->
                    endpoint.userService(oAuth2UserService)
                }
                it.successHandler(oAuth2SuccessHandler)
            }
            .logout {
                it.logoutUrl("/api/auth/logout")
                it.invalidateHttpSession(true)
                it.deleteCookies("SESSION")
            }
            .formLogin { it.disable() }
            .httpBasic { it.disable() }

        return http.build()
    }
}