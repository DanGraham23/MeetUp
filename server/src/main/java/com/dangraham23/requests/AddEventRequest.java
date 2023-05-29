package com.dangraham23.requests;

import java.sql.Date;

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
    private Date startDate;
    private Date endDate;
    private String description;
    private Integer host_id;
    private Integer guest_id;
}
