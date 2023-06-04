package com.dangraham23.server.requests;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AddEventRequest {
    private String title;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String description;
    private Integer guest_id;
}
