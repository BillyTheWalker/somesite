package com.developers.web.web.config.oauth2;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;

@Configuration
@EnableResourceServer
public class ResourceServerConfiguration extends ResourceServerConfigurerAdapter {

    /**
     * {@inheritDoc}
     */
    @Override
    public void configure(ResourceServerSecurityConfigurer resources) {
        resources.resourceId("restservice");
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.OPTIONS).permitAll()
                .antMatchers("/**").permitAll()
                .antMatchers("/auth/**").authenticated()
                .antMatchers("/css/**").permitAll()
                .antMatchers("/js/**").permitAll()
                .antMatchers("/img/**").permitAll()
                .antMatchers("/oauth/token").permitAll()
                .anyRequest().permitAll();
    }
//
//    @Override // [3]
//    public void configure(HttpSecurity http) throws Exception {
//        // @formatter:off
//        http.csrf().disable()
//                // Just for laughs, apply OAuth protection to only 2 resources
//                .requestMatchers().antMatchers("/","/admin/beans").and()
//                .authorizeRequests()
//                .antMatchers("/").permitAll()
//                .antMatchers("").permitAll()
//                .anyRequest().access("#oauth2.hasScope('read')"); //[4]
//        // @formatter:on
//    }
//
//    @Override
//    public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
//        resources.resourceId(RESOURCE_ID);
//    }
}