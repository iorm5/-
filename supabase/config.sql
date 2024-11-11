-- Create necessary tables for the villa booking system

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Bookings table
create table public.bookings (
    id uuid default uuid_generate_v4() primary key,
    guest_name text not null,
    guest_email text not null,
    guest_phone text not null,
    check_in date not null,
    check_out date not null,
    guests_count integer not null,
    total_price decimal(10,2) not null,
    status text check (status in ('pending', 'confirmed', 'cancelled')) default 'pending',
    special_requests text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Images table
create table public.images (
    id uuid default uuid_generate_v4() primary key,
    title text not null,
    description text,
    category text check (category in ('exterior', 'interior', 'amenities', 'activities')),
    file_path text not null,
    storage_path text not null,
    is_active boolean default true,
    display_order integer default 0,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Reviews table
create table public.reviews (
    id uuid default uuid_generate_v4() primary key,
    booking_id uuid references public.bookings(id),
    guest_name text not null,
    rating integer check (rating >= 1 and rating <= 5) not null,
    comment text,
    is_approved boolean default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Admins table
create table public.admins (
    id uuid default uuid_generate_v4() primary key,
    email text unique not null,
    password_hash text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.bookings enable row level security;
alter table public.images enable row level security;
alter table public.reviews enable row level security;
alter table public.admins enable row level security;

-- Create policies
create policy "Bookings are viewable by everyone" 
on public.bookings for select 
using (true);

create policy "Bookings can be inserted by anyone" 
on public.bookings for insert 
with check (true);

create policy "Images are viewable by everyone" 
on public.images for select 
using (is_active = true);

create policy "Reviews are viewable by everyone" 
on public.reviews for select 
using (is_approved = true);

create policy "Reviews can be inserted by anyone" 
on public.reviews for insert 
with check (true);

-- Create indexes
create index bookings_dates_idx on public.bookings (check_in, check_out);
create index images_category_idx on public.images (category) where (is_active = true);
create index reviews_rating_idx on public.reviews (rating) where (is_approved = true);